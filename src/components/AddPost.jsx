import { useEffect, useState } from "react";
import { addPosts, editPostById, getPostById } from "../service/blogsService";
import { useNavigate, useParams } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState({
    title: "",
    text: "",
    createdAt: "",
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostById(id).then(({ data }) => {
        setPosts(data);
      });
    }
  }, [id]);

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
    if (id) {
      editPostById(id, posts);
    } else {
      setPosts({
        title: "",
        text: "",
        createdAt: "",
      });
    }
    navigate("/");
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
