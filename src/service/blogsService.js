import { API } from "../shared/api";

export const getPosts = () => {
  return API.get("/posts");
};

export const getPostById = (id) => {
  return API.get(`/posts/${id}`);
};
