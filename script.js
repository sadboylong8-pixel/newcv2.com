const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  document.body.classList.toggle('nav-open');
});

const typingText = document.querySelector(".typing-text");

const roles = [
  "IT Support ",
  "Basic Networking",
  "Software Troubleshooter",
  "Hardware & Software "
];

let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[index];
  
  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingText.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 40 : 110);
  }
}

typeEffect();
