import { useEffect, useState } from "react";
import { getPostById } from "../service/blogsService";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostById(id).then(({ data }) => {
        setPost(data);
      });
    }
  }, [id]);

  return (
    <div
      className="container mt-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Design</strong>
            <h3 className="mb-0">{post.title}</h3>
            <div className="mb-1 text-body-secondary">{post.createdAt}</div>
            <p className="mb-auto">{post.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SinglePost;
