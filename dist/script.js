const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('-translate-x-full');
  mobileMenu.classList.add('translate-x-0');

  // Trigger the fade-in animations
  const menuItems = document.querySelectorAll('#mobile-menu button, #mobile-menu nav ul li a');
  menuItems.forEach((item, index) => {
    item.style.animationDelay = `${0.1 + index * 0.1}s`;
    item.classList.add('opacity-100');
  });
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

function closeMenu() {
  mobileMenu.classList.remove('translate-x-0');
  mobileMenu.classList.add('-translate-x-full');

  // Reset the opacity for the next open
  const menuItems = document.querySelectorAll('#mobile-menu button, #mobile-menu nav ul li a');
  menuItems.forEach(item => {
    item.classList.remove('opacity-100');
  });
}
