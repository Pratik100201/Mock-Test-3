const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');

openModalBtn.addEventListener('click', function() {
  modalOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', function() {
  modalOverlay.classList.remove('show');
  document.body.style.overflow = 'auto';
});

modalOverlay.addEventListener('click', function(event) {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
});
