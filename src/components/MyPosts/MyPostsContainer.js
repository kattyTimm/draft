import React from 'react';

class MyPostsContainer extends React.Component{

	render(){
      let postsItem = this.props.posts.map((post, i) => {

          return <div key={i}>
                     {post.text}
                 </div>   
      });

    	return <div>{postsItem}</div>
	}
}


export default MyPostsContainer;