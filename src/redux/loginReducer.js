import {loginApi} from './api';
import {authMeThunk, logoutAC} from './authReducer';

const LOGIN = 'LOGIN';

let initialState = {
   email: null,
   password: null,
   rememberMe: false,
   captcha: null,

   isAuth: false,
   isFetching: true
};


const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN: {
          return {...state, ...action.data};
        };
        default: return state;
    }
};


// const login_AC = (email, password, rememberMe) => ({type: LOGIN, data: {email, password, rememberMe}});

export const login_Thunk = (email, password, rememberMe) => dispatch => {
    loginApi.login(email, password, rememberMe).then(resp => {
      if(resp.data.resultCode === 0) {
           dispatch(authMeThunk()) ;
      } 
    });
      
};

export const logout_Thunk = () => dispatch => {
  loginApi.logout().then(resp => {
      if(resp.data.resultCode === 0) {
         dispatch(logoutAC(null, null, null));
      }
  });
};

export default loginReducer;