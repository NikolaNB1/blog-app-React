import { useEffect, useState } from "react";
import { getPostById } from "../service/blogsService";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
// import useFormattedDate from "../customHooks/useFormattedDate";

const SinglePost = () => {
  const [post, setPost] = useState({ comments: [] });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostById(id).then(({ data }) => {
        setPost(data);
      });
    }
  }, [id]);

  // const formattedCreatedAt = useFormattedDate(post.createdAt);

  return (
    <div>
      <div
        className="container mt-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                <h3>{post.title}</h3>
              </strong>
              <div className="mb-1 text-body-secondary">{post.text}</div>
              <p className="mb-auto">{post.createdAt}</p>
            </div>
          </div>
        </div>
      </div>
      <AddComment postId={id} />
      <div className="container border mt-5" style={{ width: "700px" }}>
        <h2>Komentari ({post.comments.length})</h2>
        {post.comments.map((comment, index) => (
          <div key={comment.id} className="comment">
            <p>Redni broj komentara: {index + 1}</p>
            <textarea
              disabled
              rows="3"
              cols="10"
              style={{ width: "100%" }}
              defaultValue={comment.text}
            ></textarea>
            <p>Created at: {comment.createdAt}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SinglePost;
