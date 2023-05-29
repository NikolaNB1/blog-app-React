import { useState } from "react";
import { addComment } from "../service/blogsService";

const AddComment = ({ postId }) => {
  const [comment, setComment] = useState({
    text: "",
    createdAt: "",
    postId: postId,
  });

  const handleSubmit = () => {
    if (comment.text.length === 0) {
      return alert("Polje za komentar ne može biti prazno");
    }

    addComment(comment.text, comment.createdAt, comment.postId).then(() => {
      setComment({
        text: "",
        createdAt: "",
        postId: postId,
      });
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        style={{ width: "500px" }}
        className="container mt-5"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Enter your comment</label>
          <textarea
            onChange={handleInputChange}
            defaultValue={comment.text}
            placeholder="Dodajte komentar..."
            className="form-control"
            name="text"
          ></textarea>
          <input type="hidden" />
        </div>
        <div>
          <input
            className="form-label"
            name="createdAt"
            type="date"
            value={comment.createdAt}
            onChange={handleInputChange}
            placeholder="Datum kreiranja"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Post comment
          </button>
        </div>
      </form>
    </>
  );
};
export default AddComment;
