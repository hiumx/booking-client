import axios from "~/configs/init.axios";

export const getUserMyInfo = () => axios.get("/users/my-info");

export const updateUserByField = (id, dataUpdate) => axios.patch(`/users/${id}`, dataUpdate);

export const resetPassword = (id, data) => axios.patch(`/users/reset-password/${id}`, data);

export const getHotelsSaveByUser = uid => axios.get(`/users/save-hotel/${uid}`);

export const saveHotelByUser = payload => axios.post(`/users/save-hotel`, payload);

