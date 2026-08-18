(function initContactForm() {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  if (!form) return;

  const status = form.querySelector<HTMLDivElement>('.form-status');
  const submit = form.querySelector<HTMLButtonElement>('.form-submit');
  if (!status || !submit) return;

  function msg(key: string): string {
    return form?.dataset[key] ?? '';
  }

  function setError(name: string, text: string) {
    const el = form?.querySelector(`[data-error="${name}"]`);
    if (el) el.textContent = text;
  }

  form.addEventListener('submit', async (e: Event) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data: Record<string, FormDataEntryValue | undefined> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    form.querySelectorAll<HTMLSpanElement>('.form-error').forEach((el) => (el.textContent = ''));
    status.classList.remove('success', 'error');
    status.textContent = '';

    const errors: Record<string, string> = {};
    if (!String(data.name ?? '').trim()) errors.name = msg('msgNameRequired');
    if (!String(data.email ?? '').trim()) errors.email = msg('msgEmailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email)))
      errors.email = msg('msgEmailInvalid');
    if (!String(data.message ?? '').trim()) errors.message = msg('msgMessageRequired');
    else if (String(data.message).length < 10) errors.message = msg('msgMessageMin');

    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([key, m]) => setError(key, m));
      return;
    }

    submit.disabled = true;
    submit.classList.add('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        status.classList.add('success');
        status.textContent = msg('msgSuccess');
        form.reset();
      } else {
        throw new Error('Request failed');
      }
    } catch {
      status.classList.add('error');
      status.textContent = msg('msgError');
    } finally {
      submit.disabled = false;
      submit.classList.remove('loading');
    }
  });
})();
