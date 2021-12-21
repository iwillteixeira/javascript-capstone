import './scss/style.scss';
import Comment from './comment';

const btnComment = document.querySelectorAll('#comments');

btnComment.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    Comment.showModal(e);
  });
});
