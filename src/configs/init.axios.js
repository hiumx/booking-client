import axios from 'axios';
// require('dotenv').config();

const instance = axios.create({
    baseURL: process.env.BASE_URL_BOOKING_BACKEND || "http://localhost:8080/api/v1",
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

instance.interceptors.response.use(
    function(response) {
        return response?.data;
    }, function (error) {
        const err = error?.response?.data;
        return err;
      }
);

export default instance;
