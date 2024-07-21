import axios from "~/configs/init.axios";

export const getRoomById = async id => await axios.get(`/rooms/r?rid=${id}`);

export const getRoomByHotelId = async hid => await axios.get(`/rooms/${hid}`);