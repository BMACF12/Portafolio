import type { APIRoute } from 'astro';
import { z } from 'zod';

export const prerender = false;

// Simple in-memory rate limiting (per serverless instance).
// 5 requests per minute per IP — enough for a personal portfolio.
const rateLimit = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const hits = (rateLimit.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_MAX) {
    rateLimit.set(key, hits);
    return true;
  }
  hits.push(now);
  rateLimit.set(key, hits);
  return false;
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name too short').max(80),
  email: z.email('Invalid email'),
  subject: z.string().max(120).optional(),
  message: z.string().min(10, 'Message too short').max(5000),
  'bot-field': z.string().optional(),
});

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    clientAddress ??
    'unknown';

  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: 'Too many requests. Try again later.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json', 'Retry-After': '60' },
    });
  }

  if (request.headers.get('content-type')?.includes('application/json') !== true) {
    return new Response(JSON.stringify({ error: 'Invalid content type' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ error: 'Validation failed', issues: parsed.error.issues }),
      { status: 422, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (parsed.data['bot-field']) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO;
  const fromEmail = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !toEmail || !fromEmail) {
    console.warn('Resend not configured — message received:', parsed.data);
    return new Response(
      JSON.stringify({ ok: true, mode: 'log-only' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: parsed.data.email,
      subject: parsed.data.subject
        ? `[Portfolio] ${parsed.data.subject}`
        : `[Portfolio] New message from ${parsed.data.name}`,
      html: `
        <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a0a;color:#fafafa;border-radius:16px;">
          <h1 style="color:#e63946;margin-top:0;">New contact form submission</h1>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#a0a0a0;text-transform:uppercase;font-size:12px;letter-spacing:0.2em;">Name</td></tr>
            <tr><td style="padding:4px 0 24px;font-size:18px;">${escape(parsed.data.name)}</td></tr>
            <tr><td style="padding:8px 0;color:#a0a0a0;text-transform:uppercase;font-size:12px;letter-spacing:0.2em;">Email</td></tr>
            <tr><td style="padding:4px 0 24px;font-size:18px;"><a href="mailto:${escape(parsed.data.email)}" style="color:#e63946;">${escape(parsed.data.email)}</a></td></tr>
            ${parsed.data.subject ? `<tr><td style="padding:8px 0;color:#a0a0a0;text-transform:uppercase;font-size:12px;letter-spacing:0.2em;">Subject</td></tr><tr><td style="padding:4px 0 24px;font-size:18px;">${escape(parsed.data.subject)}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#a0a0a0;text-transform:uppercase;font-size:12px;letter-spacing:0.2em;">Message</td></tr>
            <tr><td style="padding:4px 0;font-size:16px;line-height:1.6;white-space:pre-wrap;">${escape(parsed.data.message)}</td></tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Email send failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true, id: data?.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
