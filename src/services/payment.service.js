import axios from "~/configs/init.axios";

export const makePayment = amount => axios.get(`/payment/vn-pay?amount=${amount}&bankCode=NCB`);