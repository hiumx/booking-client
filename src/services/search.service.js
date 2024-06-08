import axios from "~/configs/init.axios";

export const getDataSearchHotel = payload => axios.post("/search", payload);

export const filterHotelByChecked = payload => axios.post("/search/filter", payload);