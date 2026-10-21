const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const fromEmail = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'IT Support Inquiry';
    const msg = document.getElementById('message').value.trim();

    if (!name || !fromEmail || !msg) {
      alert('Please fill out all required fields.');
      return;
    }

    const bodyLines = [
      `Sender: ${name}`,
      `Email: ${fromEmail}`,
      `Subject: ${subject}`,
      '',
      '--- Message ---',
      msg
    ].join('\r\n');

    const recipient = 'honglylong61@gmail.com';
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent('[Portfolio] ' + subject)}&body=${encodeURIComponent(bodyLines)}`;
    
    // Open default mail client
    window.location.href = mailto;
  });
}
