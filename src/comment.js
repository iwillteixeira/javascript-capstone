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
  };

  const showImage = (dataImage) => {
    const image = document.querySelector('img');
    image.src = dataImage;
    console.log();
  };

  const showName = (dataName) => {
    const title = document.querySelector('h2');
    title.innerText = dataName;
  };

  return { showModal, closeModal, showImage, showName };
})();
export default Comment;
