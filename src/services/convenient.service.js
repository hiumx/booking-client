import axios from "~/configs/init.axios";

export const getAllConvenient = () => axios.get("/convenients");