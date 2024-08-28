window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  document.querySelectorAll('.section').forEach((el, i) => {
    if (el.offsetTop - document.querySelector('nav').clientHeight - document.querySelector('header').clientHeight <= scrollDistance) {
      document.querySelectorAll('nav a').forEach((el) => {
        if (el.classList.contains('nav-active')) {
          el.classList.remove('nav-active');
        }
      })
    }
    document.querySelectorAll('nav li')[i].querySelector('a').classList.add('nav-active');
  });
})