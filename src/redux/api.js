
import * as axios from 'axios';

let instance =  axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
            'API-KEY': '43040dd6-0e63-4499-9314-9afff1dbb86e' 
           }
});


export const dialogsApi = {
   getAllDialogs: () => {return instance.get(`dialogs`);}, // get all dialogs

   getUserDialogs(userId){ 
      return instance.get(`dialogs/${userId}/messages`); }, // get list of messages with your friend
   startDialogs(userId){
     return instance.put(`dialogs/${userId}`, userId);} //start chatting, refresh your companion so that he was on top
};

export const securityApi = {
  getCaptcha (){return instance.get(`security/get-captcha-url`);}
};

export const authApi = {
    me(){return instance.get(`auth/me`);},
    login: (email, password, rememberMe = false, captcha = '') => { 
          return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout: function (){return instance.delete(`auth/login`);} 
}

export const loginApi = {
    login: function(email, password, rememberMe = false, captcha = ''){
             return instance.post(`auth/login`, {email, password, rememberMe, captcha});
           },
    logout(){return instance.delete(`auth/login`);}       
};

export const profileApi_ = {
  getProfile: userId => {return instance.get(`profile/${userId}`);},
  getStatus(userId){ return instance.get(`profile/status/${userId}`);},
  updateStatus(text) {return instance.put(`profile/status`, {status: text});},
  updateProfile (data) {return instance.put(`profile`, data);},
  updatePhoto: function(file){
    let formData = new FormData();
    formData.append('image', file);
 
    return instance.put(`profile/photo`, formData, {
         headers: {'Content-Type': 'multipart/form-data'}
    });}
};

export const profileApi = {
    getProfile: (id) => {return instance.get(`profile/${id}`); },
    getStatus: function(userId){return instance.get(`profile/status/${userId}`);}, //${userId}

    updateStatus: (str) => {return instance.put(`profile/status`, {status: str});},
    updateProfile(profile){
                 return instance.put(`profile`, profile);
    },
    
    updatePhoto (file){
      let formData = new FormData();
      formData.append('image', file);

      return instance.put(`profile/photo`, formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      });
    }
};


export const usersApi = {
  getUser(page = 1, count = 10){return instance.get(`users?page=${page}&count=${count}`);},
  follow(userId){ return instance.post(`follow/${userId}`); },
  unFollow: (userId) => { return instance.delete(`follow/${userId}`);}
};

export const profileApi_2 = {
  saveProfile: function(profile){return instance.put(`profile`, profile)}
};

///`users?page=${page}&count=${count}`