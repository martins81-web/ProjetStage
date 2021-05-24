import axios from 'axios';


export default function interceptorsSetup() {
    axios.interceptors.request.use(
      function(config) {
        const token = localStorage.getItem("jwt");
        if (token) {
          config.headers.Authorization = token;
        }
        return config;
      },
      function(err) {
        return Promise.reject(err);
      }
    );
  }