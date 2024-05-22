import axios from "~/configs/init.axios";

export const sendEmail = data => axios.post("/emails/send-mail", data);