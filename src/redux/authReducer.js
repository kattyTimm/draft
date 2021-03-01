import React from 'react';
import {authApi} from './api';

const AUTH_ME = 'AUTH_ME';
const LOGOUT = 'LOGOUT';

let initialState = {
    id: null,
    login: null,
    email: null,

    isAuth: false,
    isFetching: true,

    captcha: ''
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
      case AUTH_ME:{
      
        return {...state, ...action.data, isAuth: true, isFetching: false};
      };
      case LOGOUT:{
         return {...state, ...action.data, isAuth: false, isFetching: false};
      };

      default: return state;
    };
};

const authMeAC = (id, login, email) => ({type: AUTH_ME, data: {id, login, email} });
const logoutAC = (id, login, email) => ({type: LOGOUT, data: {id, login, email} });

export const authMeThunk = () => {
  return dispatch => {
        authApi.me().then(resp => {
         if(resp.data.resultCode === 0){
             let {id, login, email} = resp.data.data;
             dispatch(authMeAC(id, login, email)); 
          };
        }); 
  };
};

export const  loginThunk = (email, password, rememberMe = false, captcha = '') => dispatch => {
  authApi.login(email, password, rememberMe, captcha).then(resp => {
    if(resp.data.resultCode === 0){
          dispatch(authMeThunk());
    }// else{} обработка ошибок redux form
  });
};

export const logoutThunk = () => dispatch => {
  authApi.logout().then(resp => {
     if(resp.data.resultCode === 0){
        dispatch(logoutAC(null, null, null));
        console.log(resp.data);
     }
  });
};

export default authReducer;