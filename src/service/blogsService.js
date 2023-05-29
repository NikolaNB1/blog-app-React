import { API } from "../shared/api";

export const getPosts = () => {
  return API.get("/posts");
};
