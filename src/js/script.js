const modalTrigger = document.querySelector('[data-modal]');
const modalClose = document.querySelector('[data-close]');
const overlay = document.querySelector('.overlay');

modalTrigger.addEventListener('click', () => {
    overlay.classList.remove('hide');
    overlay.classList.add('show');
});

modalClose.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.classList.add('hide');
})