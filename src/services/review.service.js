import axios from "~/configs/init.axios";

export const newReview = payload => axios.post("/reviews", payload);