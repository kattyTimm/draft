import {usersApi} from './api';

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_TOGGLE_FOLLOW = 'SET_TOGGLE_FOLLOW';
const SET_TOGGLE_UnFOLLOW = 'SET_TOGGLE_UnFOLLOW';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
   items: [],
   count: 7, // page size
   page: 1, // number of portion of items 
   currentPage: 1,
   isFetching: true,
   totalUsers: 0,
   followingProgress: []
};


const userReducer = (state = initialState, action) => {
  switch(action.type){
     case SET_USERS: {
         return {...state, items: action.items};
     };
     case TOGGLE_IS_FETCHING: {
         return {...state, isFetching: action.value};
     };

     case SET_TOGGLE_FOLLOW: {
          return {...state, items: state.items.map((u, i) => {
                                                      if(u.id === action.userId){
                                                         return {...u, followed: true}
                                                      }else{
                                                         return u;
                                                      }
                                               })};
     };

     case SET_TOGGLE_UnFOLLOW: {
        return {...state, items: state.items.map((u, i) => {
                                                if(u.id === action.userId){
                                                  return {...u, followed: false}
                                                }else{
                                                  return u;
                                                }
                                             })};
     };
     case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.page};
     };

     case SET_TOTAL_USERS_COUNT: {
       return {...state, totalUsers: action.total};
     };

     case TOGGLE_FOLLOWING_PROGRESS:{
       
     return {...state, followingProgress: action.isFetching ? [...state.followingProgress, action.id]
                                                            : state.followingProgress.filter(id => id !== action.id)};
     };
     default: return state;
  }
};


/*
     case TOGGLE_FOLLOWING_PROGRESS :{

     return {...state, followingProgress: action.isFetching ? [...state.followingProgress, action.id] 
                                                            : state.followingProgress.filter(id => id != action.id)};
           
     };

*/

const setUsersAC = (items) => ({type: SET_USERS, items});
const toggleIsFetchingAC = (val) => ({type: TOGGLE_IS_FETCHING, value: val}); 
const setTotalUsersCountAC = (total) => ({type: SET_TOTAL_USERS_COUNT, total});
export const setCurrentPageAC = (num) => ({type: SET_CURRENT_PAGE, page: num});

const followAC = (userId) => ({type: SET_TOGGLE_FOLLOW, userId});
const unFollowAC = (userId) => ({type: SET_TOGGLE_UnFOLLOW, userId});


export const toggle_followingProgress_AC = (isFetching, id) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, id});


export const unFollowThunk_ = userId => dispatch => {
    dispatch(toggle_followingProgress_AC(true, userId));

    usersApi.unFollow(userId).then(resp => {
      if(resp.data.resultCode === 0){
          dispatch(toggleIsFetchingAC(false));
          dispatch(unFollowAC(userId));
      }
    });
    dispatch(toggle_followingProgress_AC(false, userId));
};

export const followThunk_ = userId => dispatch => {
    dispatch(toggle_followingProgress_AC(true, userId));

    usersApi.follow(userId).then(resp => {
      if(resp.data.resultCode === 0){
          dispatch(toggleIsFetchingAC(false));
          dispatch(followAC(userId));
      }
    });
    dispatch(toggle_followingProgress_AC(false, userId));
};

export const unFollowThunk = (userId) => dispatch => {
  dispatch(toggle_followingProgress_AC(true, userId));

    usersApi.unFollow(userId).then(resp => {
       if(resp.data.resultCode === 0){
        dispatch(toggleIsFetchingAC(false));
        dispatch(unFollowAC(userId));
       }

       dispatch(toggle_followingProgress_AC(false, userId));
   });
};


export const followThunk = (userId) => (dispatch, getState) => {
   dispatch(toggle_followingProgress_AC(true, userId));

   usersApi.follow(userId).then(resp => {  
      if(resp.data.resultCode === 0){
         dispatch(toggleIsFetchingAC(false));
         dispatch(followAC(userId));
      }
         dispatch(toggle_followingProgress_AC(false, userId));
  });
};


export const setUsersThunk = (count, page) => dispatch => {
    usersApi.getUser(count, page).then(resp => {
       dispatch(toggleIsFetchingAC(false));
       dispatch(setTotalUsersCountAC(resp.data.totalCount));
       dispatch(setUsersAC(resp.data.items));
      // dispatch(setCurrentPageAC(page));
    });
};

/*
export const setCurrPageThunk = (count, page) => dispatch => {
    usersApi.getUser(count, page).then( resp => {
      dispatch(setCurrentPageAC(page));
      dispatch(setUsersThunk(count, page));
    });
};
*/
export default userReducer;

/*

 return{...state, followingProgress: action.isFetching ? [...state.followingProgress, action.id]
                                                                 : state.followingProgress.filter(id => id != action.id)};
     }; 


export const setFollow_UnFollowThunk = (userId) => dispatch => {
    usersApi.follow(userId).then(resp => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setFollow_UnFollowFlow(userId));
    });
};


*/