const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const WHATSAPP_NUMBER = '524181234567';
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const mensaje = [
    `Hola, soy ${data.get('nombre') || ''}.`,
    `Mi teléfono es ${data.get('telefono') || ''}.`,
    `Busco una pieza para ${data.get('marca') || ''} ${data.get('modelo') || ''}.`,
    `Pieza: ${data.get('pieza') || ''}`
  ].join(' ');

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  statusEl.textContent = 'Abriendo WhatsApp con tu solicitud...';
  window.open(whatsappUrl, '_blank', 'noopener');
});

const sections = [...document.querySelectorAll('main section[id], header[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a')];

const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${visible.target.id}`));
}, {threshold:[0.25,0.5,0.7]});

sections.forEach(section => observer.observe(section));