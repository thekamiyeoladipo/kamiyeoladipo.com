const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('-translate-x-full');
  mobileMenu.classList.add('translate-x-0');
});

closeMenuBtn.addEventListener('click', () => {
  closeMenu();
});

document.addEventListener('click', (event) => {
  const isClickInside = mobileMenu.contains(event.target) || menuBtn.contains(event.target);
  if (!isClickInside) {
    closeMenu();
  }
});

document.querySelectorAll('#mobile-menu nav a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

function closeMenu() {
  mobileMenu.classList.remove('translate-x-0');
  mobileMenu.classList.add('-translate-x-full');
}
