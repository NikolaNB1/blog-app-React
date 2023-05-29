import { API } from "../shared/api";

export const getPosts = () => {
  return API.get("/posts");
};

export const getPostById = (id) => {
  return API.get(`/posts/${id}`);
};

export const addPosts = (title, text, createdAt) => {
  return API.post("/posts", {
    title,
    text,
    createdAt,
  });
};
