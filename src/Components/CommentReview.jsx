import React, { useState } from "react";

const CommentReview = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      setCommentsList([...commentsList, comment]);
      setComment("");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea
          rows={5}
          cols={40}
          className="mt-5"
          placeholder="Add Your Comment..."
          value={comment}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <button className="btn btn-primary mb-2 px-5 fw-bold " type="submit">
          Submit
        </button>
      </form>
      <h3 className="mt-2">Comments</h3>
      {commentsList.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className="fw-bold fs-2">
          {commentsList.map((c, index) => (
            <p key={index}>{c}</p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentReview;
