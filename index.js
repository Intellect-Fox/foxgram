const likeElements = document.querySelectorAll('.js-like');

likeElements.forEach(likeEl => {
  likeEl.addEventListener('click', event => {
    const counterEl = event.target.parentNode.querySelector('.js-counter');
    const counter = +counterEl.textContent;

    if (event.target.classList.contains('_active')) {
      event.target.classList.remove('_active');
      counterEl.textContent = String(counter - 1);
    } else {
      event.target.classList.add('_active');
      counterEl.textContent = String(counter + 1);
    }
  });
});
