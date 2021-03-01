
import * as axios from 'axios';

let instance =  axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
            'API-KEY': '43040dd6-0e63-4499-9314-9afff1dbb86e'
           }
});

export const authApi = {
    me(){return instance.get(`auth/me`);},
    login: (email, password, rememberMe = false, captcha = '') => { 
          return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout: function (){return instance.delete(`auth/login`);} 
}