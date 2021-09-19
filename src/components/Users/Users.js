import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

import userPhoto_32 from '../../assets/imgs/userPhoto_32.png';
import s from './Users.module.css';

const Users = (props) => {

 let pageArr = [];
 let totalPageCount = Math.floor(props.totalUsers / props.count);  		


 for(let i = 1; i <= totalPageCount; i++)
      pageArr.push(i);

 let portionSize = 15;
 let portionItems = Math.floor(totalPageCount / portionSize); // количетсво порций
 let [portionNumber, setPortionNumber] = useState(1);

 let leftLimit = (portionNumber - 1) * portionSize + 1; // 1, 16, 31, 46
 let rightLimit = portionNumber * portionSize; // 15 , 30 , 45

 let pageItems = pageArr.filter(p => p >= leftLimit && p <= rightLimit).map((p, i) => {
   return <span key={i} className={p === props.currentPage ? s.activePage : ''} onClick={() => props.onSetPage(p)}>
             {p} &nbsp;
          </span> 
 });
 


  // не используется
  let pages = pageArr.map((p, i) => { 
 	         return <span key={i} className={cn({[s.activePage]: p === props.currentPage})} onClick={() => props.onSetPage(p)}>
 	                   {p}
 	                </span>});


 let users = props.items.map((u, i) => {
 	return <div key={i}>
 	           <div> 
	               <NavLink to={`/profile/${u.id}`}>
	                    <img src={u.photos.small ? u.photos.small : userPhoto_32} />
	               </NavLink>
               </div>
               <div> 
                    <span>name: </span><span>{u.name}</span>
                    <span> &para; status: </span><span>{u.status}</span>
               </div>
               {u.followed && <button onClick={() => props.unfollow(u.id) } disabled={props.followingProgress.some(id => id === u.id)}>unfollw</button>}
               {!u.followed && <button onClick={() => props.follow(u.id)} disabled={props.followingProgress.some(id => id === u.id)}>follow</button>}
 	       </div>  
 })


 return <div>     
           {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>&larr;</button>}
           {pageItems}
           {portionItems > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>&rarr;</button>}

          {users}
        </div> 
}

export default Users;


/*
 let pageItems = pageArr.filter(p => p >= leftLimit && p <= rightLimit).map((p,i) => {
          return <span key={i} className={p === props.currentPage ? s.activePage : ''} onClick={() => props.onSetPage(p)} >
                     {p} &nbsp;
                 </span> 
 });


  let rightLimit = portionNumber * portionSize; // 15
 let leftLimit = (portionNumber - 1)  * portionSize + 1; // 1

  {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber + 1)}>&larr;</button>}

   {portionItems > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>&rarr;</button>}

    let [portionNumber, setPortionNumber] = useState(1);

*/