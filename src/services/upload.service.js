import axios from "~/configs/init.axios";

export const uploadHotelImages = payload => axios.post("/images", payload,
    {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }
);