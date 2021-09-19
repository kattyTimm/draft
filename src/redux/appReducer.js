import React from 'react';

import {authMeThunk} from './authReducer';

const GET_INITIALAZED = 'GET_INITIALAZED';
const ALL_UNCAUTCHED_ERRORS = 'ALL_UNCAUTCHED_ERRORS';
const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE';

let initialState = {
    initialazed: false,
    globalUncautched: null
};

const appReducer = (state = initialState, action) => {
    switch(action.type){
      case GET_INITIALAZED:{     
        return {...state, initialazed: true};
      };

      case ALL_UNCAUTCHED_ERRORS: {
        return {...state, globalUncautched: 'global_errors'};
      };

      case HIDE_ERROR_MESSAGE: {
         return {...state, globalUncautched: null};
      };
     
      default: return state;
    };
};

const setInitialazeAC = () => ({type: GET_INITIALAZED});
const unCautchedErrors_AC = () => ({type: ALL_UNCAUTCHED_ERRORS});
const hideErrorMessage_AC = () => ({type: HIDE_ERROR_MESSAGE});


export const initialazedThunk = () => async dispatch => {
	// вот здесь вся фишка, приложение проициализируется только после того когда вернутся данные с сервера
	// и следовательно не будет таких ошибок как было у меня в профиле ( если помнишь не всегда успевала вернуться айдиха)
	// из-за этого был направильный запрос на сервер в апи - блаблабла/profile/undefined
	// естественно для айди undefined на сервере не находилось ничего
   let promise = await dispatch(authMeThunk());

 //  Promise.all([promise]) .then(resp => dispatch(setInitialazeAC()));
   dispatch(setInitialazeAC());
   // promise.then(resp => dispatch(setInitialazeAC()));
}

export const unCautchedErrorsThunk = () => async dispatch => {
 let resp = await dispatch(unCautchedErrors_AC()); 

 setTimeout(() => {dispatch(hideErrorMessage_AC())}, 3000);
     return resp;     
}


export default appReducer;