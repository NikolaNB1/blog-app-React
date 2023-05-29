import { API } from "../shared/api";

export const getPosts = () => {
  return API.get("/posts");
};

export const getPostById = (id) => {
  return API.get(`/posts/${id}?filter={"include":["comments"]}`);
};

export const addPosts = (title, text, createdAt) => {
  return API.post("/posts", {
    title,
    text,
    createdAt,
  });
};

export const editPostById = (id, post) => {
  return API.put(`/posts/${id}`, post);
};

export const deletePostById = (id) => {
  return API.delete(`/posts/${id}`);
};

export const addComment = (text, createdAt, postId) => {
  return API.post(`/posts/${postId}/comments`, {
    text,
    createdAt,
    postId,
  });
};
