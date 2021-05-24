import axios from 'axios';

const API_URL='https://stagyx-api.herokuapp.com';
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


export function getAllGroups () {
    interceptorsSetup();
    return axios.get(API_URL+'/api/private/group/list');
  }