import axios from "~/configs/init.axios";

export const getDataSearchHotel = payload => axios.post("/search", payload);