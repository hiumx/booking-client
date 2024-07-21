import axios from "~/configs/init.axios";

export const newPost = payload => axios.post("/posts", payload);

export const getAllPosts = () => axios.get("/posts");

export const confirmAPost = pid => axios.post(`/posts/confirm?pid=${pid}`);

export const getPostsByHotel = hid => axios.get(`/posts/hotel?hid=${hid}`);