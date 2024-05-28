import axios from "~/configs/init.axios";

export const getTypeHotel = () => axios.get("/type-hotel");