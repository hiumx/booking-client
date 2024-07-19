import axios from "~/configs/init.axios";

export const makeBooking = payload => axios.post("/bookings", payload);

export const getBookingByUser = userId => axios.get(`/bookings/user/${userId}`);

export const cancelBooking = id => axios.post(`/bookings/delete/${id}`);