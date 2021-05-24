import axios from 'axios';

import { API_URL } from './API';
import interceptorsSetup from './Interceptor';


export function getAllGroups () {
    interceptorsSetup();
    return axios.get(API_URL+'/api/private/group/list');
  }