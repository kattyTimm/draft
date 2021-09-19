import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import appReducer from './appReducer';

let redusers = combineReducers({
   profile: profileReducer,
   auth: authReducer,
   form: formReducer,
   users: usersReducer,
   app: appReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
