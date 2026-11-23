const dialog = document.querySelector('#figure-dialog');
const image = document.querySelector('#dialog-image');
let activeFigure = null;
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    activeFigure = button;
    image.src = button.dataset.image;
    image.alt = button.querySelector('img').alt;
    document.querySelector('#dialog-title').textContent = button.dataset.title;
    document.querySelector('#full-image-link').href = button.dataset.image;
    dialog.showModal();
    document.body.classList.add('dialog-open');
    document.querySelector('#close-dialog').focus();
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); activeFigure?.focus(); });
