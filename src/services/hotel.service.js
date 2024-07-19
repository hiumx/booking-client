import axios from "~/configs/init.axios";

export const createHotel = payload => axios.post(`/hotels`, payload);

export const getHotelById = id => axios.get(`/hotels/${id}`);

export const getTopHotel = () => axios.get("/hotels/top-hotels");

export const getHotelByManagerId = managerId => axios.get(`/hotels/hotel-manager?id=${managerId}`);