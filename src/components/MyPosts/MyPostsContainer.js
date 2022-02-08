import React,{useEffect, useState} from 'react';
import s from '../Profile/Profile.module.css';

class MyPostsContainer extends React.Component{

	render(){
      let postsItem = this.props.posts.map((post, i) => {

          return <div key={i} className={s.postItem}>
                     {post.text}
                 </div>   
      });

    	return <div>{postsItem}</div>
	}
}


export default MyPostsContainer;