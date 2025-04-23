const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const modalText = document.getElementById('modalText');
const openBtns = document.querySelectorAll('.openModal');
const closeBtn = document.getElementById('closeBtn');

let currentButton = null;

openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const message = btn.getAttribute('data-message');
    modalText.textContent = message;
    modal.classList.add('show');
    overlay.classList.add('show');

    currentButton = btn;
  });
});


closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  overlay.classList.remove('show');
    if (currentButton){
      currentButton.style.display = 'none';
      currentButton = null;
    }
});

