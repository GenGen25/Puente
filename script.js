const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const modalText = document.getElementById('modalText');
const openBtns = document.querySelectorAll('.openModal');

openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const message = btn.getAttribute('data-message');
    modalText.textContent = message;
    modal.classList.add('show');
    overlay.classList.add('show');
  });
});

function closeModal() {
  modal.classList.remove('show');
  overlay.classList.remove('show');
}