import axios from 'axios';
// require('dotenv').config();

const instance = axios.create({
    baseURL: process.env.BASE_URL_BOOKING_BACKEND || "http://localhost:8080/api/v1",
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.request.use(
    config => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

instance.interceptors.response.use(
    function(response) {
        return response?.data;
    }, function (error) {
        const err = error?.response?.data;
        console.log(err);
        if(err.code === 1009) {
          localStorage.removeItem("persist:user");
          localStorage.removeItem("token");
          window.location.href = "/";
        }
        return err;
      }
);

export default instance;
