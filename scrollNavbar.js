window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  const windowInnerHeight = window.innerHeight
  document.querySelectorAll('.section').forEach((el, i) => {
    if (el.offsetTop - document.querySelector('nav').clientHeight - document.querySelector('header').clientHeight <= scrollDistance) {
      document.querySelectorAll('nav a').forEach((el) => {
        if (el.classList.contains('nav-active')) {
          el.classList.remove('nav-active');
        }
      })
      document.querySelectorAll('nav li')[i].querySelector('a').classList.add('nav-active');
    }
    if (document.querySelector('footer').offsetTop - windowInnerHeight <= scrollDistance) {
      document.querySelector('.nav-contacts').classList.add('nav-active');
        document.querySelectorAll('nav a').forEach((el) => {
          if (el.classList.contains('nav-active')) {
            el.classList.remove('nav-active');
          }
      })
    } else {
      document.querySelector('.nav-contacts').classList.remove('nav-active');
    }
  });
})