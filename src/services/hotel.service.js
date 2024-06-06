import axios from "~/configs/init.axios";

export const getHotelById = id => axios.get(`/hotels/${id}`);