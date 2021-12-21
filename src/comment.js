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

  const showInfo = (data) => {
    const info = document.querySelector('.info');
    info.innerHTML = '';
    info.innerHTML += `<div>
                        <h5>Genre: ${data.genres}</h5>
                        <h5>Language: ${data.language}</h5>
                     </div>
                     <div>
                       <h5>Rating: ${data.rating.average} / 10</h5>
                       <h5>Duration: ${data.runtime} min</h5>
                     </div>`;
  };

  const addComment = (form) => {
    const allComments = document.getElementById('all-comments');
    allComments.innerHTML += `<p>${commentDate()} ${
      form.firstElementChild.children[0].value
    }: ${form.children[1].children[0].children[0].value}</p></br>`;
    countComment(allComments);
  };

  const commentDate = () => {
    const today = new Date();
    const [dd, mm, yyyy] = [
      today.getDate(),
      today.getMonth(),
      today.getFullYear(),
    ];
    const commentDate = `${dd}/${mm}/${yyyy}`;
    return commentDate;
  };

  const countComment = (allComments) => {
    allComments.firstElementChild.innerHTML = '';
    allComments.firstElementChild.innerHTML += `Comments(${(allComments.children
      .length -
      1) /
      2})`;
  };
  return { showModal, closeModal, showImage, showName, showInfo, addComment };
})();
export default Comment;
