import { useState } from "react";
import { addPosts } from "../service/blogsService";
import { Link } from "react-router-dom";

const AddPost = () => {
  const [posts, setPosts] = useState({
    title: "",
    text: "",
    createdAt: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (posts.title.length === 0) {
      return alert(`Polje Title ne moze biti prazno`);
    }
    if (posts.text.length === 0) {
      return alert(`Polje Text ne moze biti prazno`);
    }
    if (posts.createdAt.length === 0) {
      return alert(`Polje Created at ne moze biti prazno`);
    }
    if (posts.text.length > 300) {
      return alert(`Polje Text ne moze imati vise od 300 karaktera`);
    }

    addPosts(posts.title, posts.text, posts.createdAt);
    setPosts({
      title: "",
      text: "",
      createdAt: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPosts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setPosts({
      title: "",
      text: "",
      createdAt: 0,
    });
  };

  return (
    <div>
      <form
        className="container mt-5"
        style={{ width: "300px" }}
        onSubmit={(event) => handleSubmit(event, posts)}
      >
        <div className="form-floating mt-3">
          <input
            name="title"
            value={posts.title}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="Title"
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="text"
            value={posts.text}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="Text"
          />
          <label htmlFor="title">Text</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="createdAt"
            value={posts.createdAt}
            type="date"
            className="form-control"
            onChange={handleInputChange}
            placeholder="Created at"
          />
          <label htmlFor="title">Created At</label>
        </div>
        <div>
          <button
            className="w-100 btn btn-lg btn-success mt-3"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </button>
          <Link className="w-100 btn btn-lg btn-primary mt-3" to="/posts">
            Go to posts
          </Link>
          <button
            className="w-100 btn btn-lg btn-warning mt-3"
            type="reset"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddPost;
