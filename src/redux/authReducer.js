import React from 'react';
import {stopSubmit} from 'redux-form';
import {authApi, securityApi} from './api';

const AUTH_ME = 'AUTH_ME';
const LOGOUT = 'LOGOUT';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
    id: null,
    login: null,
    email: null,

    isAuth: false,
    isFetching: true,

    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
      case AUTH_ME:{
      
        return {...state, ...action.data, isAuth: true, isFetching: false};
      };
      case LOGOUT:{
         return {...state, ...action.data, isAuth: false, isFetching: false};
      };

      case GET_CAPTCHA_URL:{
        return {...state, ...action.payload};
      }
      
      default: return state;
    };
};


const authMeAC = (id, login, email) => ({type: AUTH_ME, data: {id, login, email} });
export const logoutAC = (id, login, email) => ({type: LOGOUT, data: {id, login, email} });
const getCaptcha_AC = url => ({type: GET_CAPTCHA_URL, payload: {captcha: url}});


const getCaptchaThunk = () => dispatch => {
  securityApi.getCaptcha().then(resp => {
    dispatch(getCaptcha_AC(resp.data.url));
  });
};

export const authMeThunk = () =>  dispatch => {
      return authApi.me().then(resp => {         

         if(resp.data.resultCode === 0){
             let {id, login, email} = resp.data.data;
             dispatch(authMeAC(id, login, email)); 
          };
        }); 
  };


export const  loginThunk = (email, password, rememberMe = false, captcha = '') => dispatch => {
  authApi.login(email, password, rememberMe, captcha).then(resp => {
    if(resp.data.resultCode === 0){

          dispatch(authMeThunk());
    }else{
     // dispatch(getCaptchaThunk());
     
      let action = stopSubmit('login', {_error: resp.data.messages[0]});
      dispatch(action); /// Задиспатчить обязательно!!!
    } 
  });
};

export const logoutThunk = () => dispatch => {
  authApi.logout().then(resp => {
     if(resp.data.resultCode === 0){
        dispatch(logoutAC(null, null, null));
     }
  });
};

export default authReducer;

