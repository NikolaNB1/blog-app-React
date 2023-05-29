import { useState, useEffect } from "react";
import { deletePostById, getPosts } from "../service/blogsService";
import { Link } from "react-router-dom";

const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({ data }) => setPosts(data));
  }, []);

  const handleDelete = (id) => {
    deletePostById(id);
    getPosts().then(({ data }) => setPosts(data));
  };

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {posts.map((post, id) => (
        <div key={id} className="col m-5" style={{ width: "410px" }}>
          <div className="card shadow-sm">
            <div className="card-body bg-light border rounded border">
              <h3 className="card-text">{post.title}</h3>
              <div className="mb-1 text-body-secondary">{post.text}</div>
              <p className="card-text mb-auto">{post.createdAt}</p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link
                  className="btn btn-outline-success"
                  to={`/post/${post.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-warning"
                  to={`edit/${post.id}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-outline-danger"
                  type="delete"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AppPosts;
