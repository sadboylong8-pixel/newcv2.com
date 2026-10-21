// Mobile Navigation Toggle
const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

if (toggle && navbar) {
  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const icon = toggle.querySelector('i');
    if (icon) {
      if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    }
  });

  // Close nav on link click
  navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });
}

// Header Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }

  // Back to Top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
});

// Typewriter Effect
const typingText = document.querySelector(".typing-text");

if (typingText) {
  const roles = [
    "IT Support Specialist",
    "Network Administrator",
    "Windows & Linux SysAdmin",
    "Hardware Troubleshooter",
    "Active Directory & CCTV Setup"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = roles[roleIdx];
    
    if (isDeleting) {
      typingText.textContent = current.substring(0, charIdx--);
    } else {
      typingText.textContent = current.substring(0, charIdx++);
    }

    if (!isDeleting && charIdx === current.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1800);
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(typeEffect, 350);
    } else {
      setTimeout(typeEffect, isDeleting ? 45 : 95);
    }
  }

  typeEffect();
}
