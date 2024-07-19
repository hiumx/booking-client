import axios from "~/configs/init.axios";

export const getTopRecentSearch = uid => axios.get(`/history-search?uid=${uid}`);

export const newRecentSearch = payload => axios.post(`/history-search`, payload);