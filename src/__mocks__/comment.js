const countComment = () => {
  const total = document.getElementById('comment-list').childElementCount;
  return `Comments(${total})`;
};

export default countComment;
