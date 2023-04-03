const CommentList = ({ comments }) => (
  <div>
    {comments.map(c => (
      <div>
        <div>{c.author}</div>
        <div>{c.comment}</div>
        <div>{c.rate}</div>
      </div>
    ))}
  </div>
);

export default CommentList;
