document.querySelectorAll('.simulated-hover').forEach(element => {
  element.addEventListener('touchstart', () => element.classList.add('on-hover'));
  element.addEventListener('touchend', () => element.classList.remove('on-hover'));
});
let navIcon = document.querySelector('.nav-icon');
let nav = document.querySelector('nav');

const closeNav = () => {
  nav.style.display = 'none';
  navIcon.classList.add('nav-icon-off');
  navIcon.classList.remove('nav-icon-on');
}

const openNav = () => {
  nav.style.display = 'flex';
  navIcon.classList.add('nav-icon-on');
  navIcon.classList.remove('nav-icon-off');
}

navIcon.addEventListener('touchstart', () => {
  navIcon.classList.contains('nav-icon-off') ? openNav() : closeNav();
});

nav.querySelectorAll('li').forEach(element => {
  element.addEventListener('touchend', () => {
    setTimeout(closeNav, 300);
  });
});

