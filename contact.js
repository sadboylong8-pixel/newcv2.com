const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const fromEmail = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'Message from portfolio';
    const msg = document.getElementById('message').value.trim();

    const bodyLines = [
      `Hello Long,`,
      '',
      msg,
      '',
      `- ${name}`,
      `Reply to: ${fromEmail}`
    ].join('\r\n');

    const mailto = `mailto:sadboylong8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;
    window.location.href = mailto;
  });
}


