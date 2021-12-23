const countComment = () => {
  const allComments = document.getElementById('all-comments');
  const total = allComments.lastElementChild.childElementCount;
  return `Comments(${total})`;
};

export default countComment;
