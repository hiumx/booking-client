import axios from "~/configs/init.axios";

export const newPost = payload => axios.post("/posts", payload);

export const ge s");

export const getPostsConfirmed = () => axios.get("/posts/confirmed");

export const confirmAPost = pid => axios.post(`/posts/confirm?pid=${pid}`);

export const getPostsByHotel = hid => axios.get(`/posts/hotel?hid=${hid}`);

export const getPostById = pid => axios.get(`/posts/${pid}`);

export const getPostConfirmedById = pid => axios.get(`/posts/confirmed/${pid}`);