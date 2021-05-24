import axios from 'axios';

import { API_URL } from './Api';
import interceptorsSetup from './Interceptor';


export function getUsersListByRole (role) {
    interceptorsSetup();
    return axios.post(API_URL+'/api/private/users/list/', {role: role});
}

export function getUsersByEmail (email) {
    interceptorsSetup();
    return axios.get(API_URL+'/api/private/users/get/'+email); 
}