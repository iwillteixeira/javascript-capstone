const Comment = (() => {
  const modal = document.querySelector('.modal');

  const closeModal = () => {
    const closeModal = document.getElementById('close-modal');
    closeModal.addEventListener('click', () => {
      modal.classList.remove('d-block');
      modal.classList.add('d-none');
    });
  };

  const showModal = (showID, data) => {
    modal.classList.remove('d-none');
    modal.classList.add('d-block');
    closeModal();
    itemData(showID, data);
  };

  const itemData = (showID, data) => {
    const image = document.querySelector('canvas');
    image.style.backgroundImage = `url(${data.image.original}`;
    console.log();
  };

  return { showModal, closeModal };
})();
export default Comment;
