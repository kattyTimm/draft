import {profileApi, profileApi_2, profileApi_, dialogsApi} from '../redux/api';
//import store from './store';
import {stopSubmit} from 'redux-form';

const SET_PROFILE = 'SET_USER_PROFILE';
const ADD_NEW_POST = 'ADD_NEW_POST';
const CREATE_NEW_POST_VALUE = 'CREATE_NEW_POST_VALUE';
const GET_USER_STATUS = 'GET_USER_STATUS';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';


let initialState = {
  profile: null,
  status: '',
  post: [{id: Date.now(), text: 'Привет'}],
  newPostText: ''
}

export const profileReducer = (state = initialState, action) => {
   switch(action.type){
   	  case SET_PROFILE: {
           return {...state, profile: action.data };
   	  };
      case ADD_NEW_POST: {

         let postId = state.post.length + 1;
         return {...state, post: [...state.post, {id: postId, text: action.text} ] };
      };
      /* при использованиие redux-form больше не актуально, также как и акшн креатор
      case CREATE_NEW_POST_VALUE: {

         return {...state, newPostText: action.text};
      };
      */
      case GET_USER_STATUS:{        
        return {...state, status: action.status};
      };
      case SET_PHOTO_SUCCESS:{
         return {...state, profile: {...state.profile, photos: action.file} };
      }
    
   	  default: return state;
   }
};


export const setProfileAC = (data) => ({type: SET_PROFILE, data});
export const setNewPostTextAC = (text) => ({type: ADD_NEW_POST, text});

const getStatusAC = (text) => ({type: GET_USER_STATUS, status: text});
const updatePhotoAC = (photos) => ({type: SET_PHOTO_SUCCESS, file: photos});
// export const createNewPostAC = (text) => ({type: CREATE_NEW_POST_VALUE, text});


export const updatePhoto_Thunk = (file,userId) => dispatch => {
    profileApi_.updatePhoto(file).then(resp => {
      console.log(resp);
       if(resp.data.resultCode === 0){
           dispatch(setProfile_Thunk(userId));
       }
    });
};

export const setProfile_Thunk = userId => dispatch => {
    profileApi_.getProfile(userId).then(resp => {
       dispatch(setProfileAC(resp.data));
    });

 /*   dialogsApi.getAllDialogs().then(resp => {
        console.log(resp.data);
    });

    dialogsApi.getUserDialogs(2).then(resp => console.log(resp));

    dialogsApi.startDialogs(2).then(resp => console.log(resp)) */
};

export const setStatus_Thunk = userId => dispatch => {
   profileApi_.getStatus(userId).then(resp => {
      dispatch(getStatusAC(resp.data));
   });
};

export const updateStatus_thunk = text => dispatch => {
   profileApi_.updateStatus(text).then(resp => {
      if(resp.data.resultCode === 0){
         dispatch(getStatusAC(text));
      }
   });
};


export const updateProfile_Thunk = profile => dispatch => {
       profileApi_.updateProfile(profile).then(resp => {
     //   console.log(profile.userId);

        if(resp.data.resultCode === 0){
          dispatch(setProfile_Thunk(profile.userId))             
        }
       });
};

/*
aboutMe: "ok"
contacts: {facebook: "vk.com", website: null, vk: null, twitter: null, instagram: null, …}
fullName: "Katty"
lookingForAJob: true
lookingForAJobDescription: "react"
photos: {small: "https://social-network.samuraijs.com/activecontent/images/users/6858/user-small.jpg?v=51", large: "https://social-network.samuraijs.com/activecontent/images/users/6858/user.jpg?v=51"}
userId: 6858
*/

/*
export const updatePhotoThunk = (file) => (dispatch, getState) => {
    profileApi.updatePhoto(file).then(resp => {
      if(resp.data.resultCode === 0){
         dispatch(updatePhotoAC(resp.data.data.photos.large));
      }
    });
};
*/


export const saveNewProfileData_2 = profile => async (dispatch, getState) => {
  let resp = await profileApi_2.saveProfile(profile);
  
  const useId = getState().auth.id;
    console.log(resp);
     if(resp.data.resultCode == 0){
         dispatch(setUserPrifileThunk(useId));
     
     }else{
        let errorText = resp.data.messages[0];
        const action = stopSubmit('editProfile', {_error: errorText});
        dispatch(action);

        return Promise.reject(errorText);
     }
  
};

export const updatePhotoThunk = (file, userId) => dispatch => {
  profileApi.updatePhoto(file).then(resp => {
  
    if(resp.data.resultCode === 0){
     dispatch(setUserPrifileThunk(userId));
    }
  });
};


export const setUserPrifileThunk = (useId) => async dispatch => {
  /*profileApi.getProfile(useId).then(resp => {
		dispatch(setProfileAC(resp.data))

	})*/

  try{
    let resp = await profileApi.getProfile(useId);
    dispatch(setProfileAC(resp.data));
  }catch{
    console.log(useId);
    console.log('error 112');
  }
};


export const updateUserProfileThunk = profile => async (dispatch, getState) => {
  const useId = getState().auth.id;
  const resp = await profileApi.updateProfile(profile);

  if(resp.data.resultCode === 0){
    dispatch(setUserPrifileThunk(useId));
  }else{
    const errorText = resp.data.messages.length > 0 ? resp.data.messages[0] : '';
    const action = stopSubmit('editProfile', {_error: errorText});
                                             // {"contacts" : {"facebook": resp.data.messages[0]}}
    dispatch(action);

    return Promise.reject(resp.data.messages[0]);
  }
};


export const getUserStatusThunk = (userId) => dispatch => {
    profileApi.getStatus(userId).then(resp => {
        dispatch(getStatusAC(resp.data));  
    });
};

export const updateStatusThunk = (string) => dispatch => {
       profileApi.updateStatus(string).then( resp => {
           if(resp.data.resultCode === 0){
              dispatch(getStatusAC(string));  
           }
       });
};

export default profileReducer;

/*
(profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;

    let resp = await profileApi.updateProfile(profile);
        if(resp.data.resultCode === 0){                 
              dispatch(setUserPrifileThunk(userId));
              
          }else{
            let errorText = resp.data.messages.length > 0 ?  resp.data.messages[0] : '';
            let action = stopSubmit('editProfile', {_error: errorText});
                                                   // {"contacts" : {"facebook": resp.data.messages[0]}}
            dispatch(action); 
            return Promise.reject(resp.data.messages[0]); 
          }


*/