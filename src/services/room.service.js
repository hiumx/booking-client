import axios from "~/configs/init.axios";

export const getRoomById = async id => await axios.get(`/rooms/r?rid=321`);