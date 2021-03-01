import {usersApi} from './api';

const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOW_UnFOLLOW = 'FOLLOW_UnFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
   currentPage: 1,
   count: 10, //page size   
   totalCount: null,
   error: null,
   items: [],
   isFetching: true,
   toggleFollowingProgress: []
};

const usersReducer = (state = initialState, action) => {
   switch(action.type){
      case SET_USERS:{
         return {...state, items: action.items };
      };
      case SET_TOTAL_USERS_COUNT:{
         return {...state, totalCount: action.totalCount};
      };
      case TOGGLE_IS_FETCHING:{
         return {...state, isFetching: action.val};
      };
      case FOLLOW_UnFOLLOW:{

         return {...state, items:state.items.map((u, i) => {
                         if(u.id === action.id){
                           return {...u, followed: action.val};
                         }else{
                           return u;
                         }
                      })
                         
                };
      };
      case TOGGLE_FOLLOWING_PROGRESS:{
         // когда идет подписка (toggleFollowingProgress тру), то айди пользователя закидывать
         // когда toggleFollowingProgressстанет фолс то айдишку надо из массива забирать
         return {...state, toggleFollowingProgress: action.isFetching
                           ? [...state.toggleFollowingProgress, action.id]
                           : state.toggleFollowingProgress.filter(u => u !== action.id)
                };
      };
      case SET_CURRENT_PAGE: {
         return {...state, currentPage: action.num};
      }; 
      default: return state; 
   };
};



const totalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
/// Катя!! будь очень аккуратна! из-за того что ты сетала юзеров data: {items}, в твой стэйт балда!!!! залез объект!!!! И никак не мог промапиться!!!
 /// А ты полдня втыкала не понимая что происходит!!!! Как та к то!!! Хэто пиздей!!!! 
 /// Объекта в AC кидай только когда их можно расспредить согласно свойствам из стэйта!!!!!!! Все остальнгое - нах!Й"!!" 
 // Надеюсь ты запонмнишь!
const setUsersPortionAC = (items) => ({type: SET_USERS, items });
const setToggleFetching = (val) => ({type: TOGGLE_IS_FETCHING, val});
const setFollow_UnFollowAC = (id, val) => ({type: FOLLOW_UnFOLLOW, id: id, val});
const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, num: page});
const setToggleFollowingProgress = (val, id) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching: val, id});


export const setUsersThunk = (count, page) => dispatch => {
   usersApi.getUsers(count, page).then(resp => {
         dispatch(setToggleFetching(false));
         dispatch(totalUsersCountAC(resp.data.totalCount));
         dispatch(setUsersPortionAC(resp.data.items));
         dispatch(setCurrentPageAC(page));
      });
};


export const FollowThunk = (userId) => dispatch => {
   dispatch(setToggleFollowingProgress(true, userId));

   usersApi.follow(userId).then(resp => {     

      if(resp.data.resultCode === 0){
           dispatch(setFollow_UnFollowAC(userId, true));
      }      
      dispatch(setToggleFollowingProgress(false, userId));
   });

}; 

export const unFollowThunk = (userId) => dispatch => {
   dispatch(setToggleFollowingProgress(true, userId));

   usersApi.unfollow(userId).then(resp => {
      if(resp.data.resultCode === 0){
          dispatch(setFollow_UnFollowAC(userId, false));
      }
      dispatch(setToggleFollowingProgress(false, userId));
   });
};

export default usersReducer;

/*
items: state.items.map(u => {
                           if(u.id === action.id){
                              return{...u, followed: action.val};
                           } 
                           else {
                              return u;
                           }
                         })*/