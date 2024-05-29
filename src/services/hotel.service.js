import axios from "~/configs/init.axios";

export const getDataSearchHotel = () => axios.get("/hotels/search-result");