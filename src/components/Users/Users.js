import React from 'react';
import {NavLink} from 'react-router-dom';

import userPhoto_32 from '../../assets/imgs/userPhoto_32.png';
import s from './Users.module.css';

const Users = (props) => {

  let items;
   if(props.items){
   
		 items = props.items.map((u, i) => {
		 
			return <div key={i}>
			          <span>
			             <NavLink to={`/profile/${u.id}?`}>
			                <img className={s.smallAva} src={u.photos.small ? u.photos.small : userPhoto_32} />
			             </NavLink>   
			          </span>
	                  <span>{u.name}</span>
	                  {u.followed ? props.isAuth && <button disabled={props.toggleFollowingProgress.some(userId => userId === u.id)} onClick={(e) => {props.unFollow(u.id)} }> unFollow </button>
                                  : props.isAuth && <button disabled={props.toggleFollowingProgress.some(userId => userId === u.id)} onClick={(e) => {props.follow(u.id)} }> follow </button>
	                  }
			       </div>   
		});
   }

  
   return <div>{items}</div>
 
}

export default Users;
