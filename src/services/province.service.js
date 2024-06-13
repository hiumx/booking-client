import axios from "~/configs/init.axios";

export const getTopProvince = () => axios.get("/provinces");