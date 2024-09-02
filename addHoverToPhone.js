document.querySelectorAll('.simulated-hover').forEach(element => {
  element.addEventListener('touchstart', () => element.classList.add('on-hover'));
  element.addEventListener('touchend', () => element.classList.remove('on-hover'));
});

document.querySelectorAll('.simulated-active').forEach(element => {
  element.addEventListener('touchstart', () => {
    if (element.classList.contains('on-active')) {
      element.classList.remove('on-active')
    } else element.classList.add('on-active');
  });
});