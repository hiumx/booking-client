import axios from "~/configs/init.axios";

export const getTypePost = () => axios.get("/type-post");