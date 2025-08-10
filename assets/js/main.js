// Toggle menú móvil
const toggle = document.getElementById('menuToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
// Cierra al navegar
document.querySelectorAll('header nav a').forEach(a=>{
  a.addEventListener('click', ()=> document.body.classList.remove('nav-open'));
});

// Marca activo según URL
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('header nav a').forEach(a=>{
  if (a.getAttribute('href') === current) a.classList.add('active');
});

// Sombra del header al hacer scroll
const header = document.querySelector('header');
window.addEventListener('scroll', ()=>{
  header.style.boxShadow = (window.scrollY > 8) ? '0 6px 14px rgba(0,0,0,.06)' : 'none';
});

// Feedback del formulario (fake, sin backend)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('¡Gracias! Recibimos tu mensaje. Te contactaremos hoy.');
    form.reset();
  });
}
