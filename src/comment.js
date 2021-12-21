const Comment = (() => {
  const modal = document.querySelector('.modal');

  const closeModal = () => {
    const closeModal = document.getElementById('close-modal');
    closeModal.addEventListener('click', () => {
      modal.classList.remove('d-block');
      modal.classList.add('d-none');
    });
  };

  const showModal = () => {
    modal.classList.remove('d-none');
    modal.classList.add('d-block');
    closeModal();
  };
  return { showModal, closeModal };
})();
export default Comment;
