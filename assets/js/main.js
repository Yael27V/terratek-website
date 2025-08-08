// Toggle menú móvil
const toggle = document.getElementById('menuToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
}

// Cierra el menú al navegar
document.querySelectorAll('header nav a').forEach(a=>{
  a.addEventListener('click', ()=> document.body.classList.remove('nav-open'));
});

console.log("Terratek Solutions UI mejorada ✅");
