import axios from "~/configs/init.axios";

export const getUserMyInfo = () => axios.get("/users/my-info");

export const updateUserByField = (id, dataUpdate) => axios.patch(`/users/${id}`, dataUpdate);