---
lang: en
title: Centro AYRE
description: Website for Centro AYRE with child development services, informational sections and validated forms to capture patients.
year: 2025
status: completed
tags: [Next.js, TypeScript, Tailwind, React Hook Form, Zod]
highlights:
  - Forms with React Hook Form + Zod and feedback through Sonner
  - Framer Motion animations and modular sections per service
  - Metadata and SEO configured with the Next.js API
github: https://github.com/BMACF12/Ayre-Web
featured: false
order: 4
---

## Context

Website for **Centro AYRE**, dedicated to child development, psychology and stimulation in Quito. They needed to explain their services clearly and receive contact requests without friction.

## How it is built

- **Next.js + TypeScript** with the App Router and section-based components: hero, purpose, featured services, stats, testimonials and a final call to action.
- **Tailwind CSS** for the visual system and **Framer Motion** for animations.
- Forms with **React Hook Form + Zod**, typed validation and toasts via **Sonner**.
- Icons with `lucide-react` and per-page metadata for SEO.

## Technical challenges

- Translating a sensitive service (child health) into a warm tone without losing clarity.
- Validating forms on client and server with the same schema.
- Balancing animation and accessibility for families browsing on mobile.

## Learning

A well-validated form is not a technical detail: it is part of the experience. Zod centralises the rules and prevents contradictory messages between client and server.
