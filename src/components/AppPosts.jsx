import { useState, useEffect } from "react";
import { getPosts } from "../service/blogsService";
import { Link } from "react-router-dom";

const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({ data }) => setPosts(data));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          className="table table-striped table-hover"
          style={{ width: "300px", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>Text</th>
              <th>Created at</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, id) => (
              <tr key={id}>
                <td>{post.title}</td>
                <td>{post.text}</td>
                <td>{post.createdAt}</td>
                <td>
                  <Link to={`/post/${post.id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AppPosts;
