const Comment = (() => {
  const modal = document.querySelector('.modal');

  const showModal = (e) => {
    modal.classList.remove('d-none');
    modal.classList.add('d-block');
    closeModal();
  };

  const closeModal = () => {
    const closeModal = document.getElementById('close-modal');
    closeModal.addEventListener('click', () => {
      modal.classList.remove('d-block');
      modal.classList.add('d-none');
    });
  };

  return { showModal, closeModal };
})();
export default Comment;
