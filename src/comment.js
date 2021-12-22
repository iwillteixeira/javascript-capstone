const Comment = (() => {
  const modal = document.querySelector('.modal');
  const allComments = document.getElementById('all-comments');
  const form = document.querySelector('form');
  const name = form.firstElementChild.firstElementChild;
  const insight = form.children[1].children[0].children[0];
  const ul = document.getElementById('all-comments').children[1];

  const clearComment = () => {
    for (let i = 0; i < allComments.childElementCount; i += 1) {
      allComments.children[i].innerText = '';
    }
  };

  const clearForm = () => {
    name.value = '';
    insight.value = '';
  };

  const closeModal = () => {
    const closeModal = document.getElementById('close-modal');
    closeModal.addEventListener('click', () => {
      modal.classList.remove('d-block');
      modal.classList.add('d-none');
      clearComment();
    });
  };

  const showModal = () => {
    modal.classList.remove('d-none');
    modal.classList.add('d-block');
  };

  const showImage = (dataImage) => {
    const image = document.querySelector('img');
    image.src = dataImage;
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

  const countComment = () => {
    const total = allComments.lastElementChild.childElementCount + 1;
    allComments.firstElementChild.innerText = `Comments(${total})`;
  };

  const addComment = () => {
    countComment();
    const li = document.createElement('li');
    ul.append(li);
    li.innerText = `${commentDate()} ${name.value}: ${insight.value}`;
    clearForm();
  };
  return {
    showModal,
    closeModal,
    showImage,
    showName,
    showInfo,
    addComment,
  };
})();
export default Comment;
