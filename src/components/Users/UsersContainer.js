import React from 'react';
import {connect} from 'react-redux';

import {setUsersThunk, setCurrentPageAC, followThunk, unFollowThunk, toggle_followingProgress_AC} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Preloader/Bean_Eater_420px.gif';


class UsersContainer extends React.Component  {

  componentDidMount(){  
    this.props.setUsers(this.props.page, this.props.count);
  }

  onSetPage = (num) => {
    this.props.setCurrPage(num); // по сути нужна только для того чтобы стилизовать активную страницу на UI
    this.props.setUsers(num, this.props.count);
  };


  onFollow = (id) => { //{this.props.follow}
   // this.props.onToggleFollowingProgress(true);
    this.props.follow(id);//.then( () =>  this.props.onToggleFollowingProgress(false))
   
  }

  onUnfollow = (id) => { //{this.props.unfollow}
   // this.props.onToggleFollowingProgress(true);
    this.props.unfollow(id);//.then(() => this.props.onToggleFollowingProgress(false))
    
  };

  render(){

    if(this.props.isFetching) return <img src={Preloader} />
    else return <Users totalUsers={this.props.totalUsers} count={this.props.count} items={this.props.items} 
                       isFetching={this.props.isFetching} currentPage={this.props.currentPage}
                       followingProgress={this.props.followingProgress}
                       onSetPage={this.onSetPage} follow={this.onFollow} unfollow={this.onUnfollow} />  

  }
}

const mapStateToProps = (state) => {
   return {
       items: state.users.items,
       isFetching: state.users.isFetching,
       count: state.users.count,
       page: state.users.page,
       totalUsers: state.users.totalUsers,
       currentPage: state.users.currentPage,
       followingProgress: state.users.followingProgress
   };
};

export default connect(mapStateToProps, {setUsers: setUsersThunk, 
                                         setCurrPage: setCurrentPageAC, 
                                         follow: followThunk,
                                         unfollow :unFollowThunk,
                                         onToggleFollowingProgress: toggle_followingProgress_AC})(UsersContainer);
       
/*


  onSetPage = (num) => {
    this.props.setCurrPage(num);
    this.props.setUsers(num, this.props.count);
  }


import {connect} from 'react-redux';
import Users from './Users';
import Pagination from '../Pagination/Pagination';
import {setUsersThunk, FollowThunk, unFollowThunk} from '../../redux/usersReducer';
import Preloader from '../Preloader/Bean_Eater_420px.gif';

class UsersContainer extends React.Component {
    componentDidMount(){

    	this.props.setUsers(this.props.count, this.props.currentPage);
    	console.log(this.props);
    }

    onPageChange = (selectedPage) => {
 
    	 this.props.setUsers(this.props.count, selectedPage); 
    }


	render(){	
	  return (
	    <div>
           {this.props.isFetching ? <img src={Preloader}/> : null} 

	       <Pagination onPageChange={this.onPageChange}  totalCount={this.props.totalCount} 
	                   pageSize={this.props.count} currentPage={this.props.currentPage}/>

	       <Users count={this.props.count} items={this.props.items} isAuth={this.props.isAuth}
	              toggleFollowingProgress={this.props.toggleFollowingProgress} isFetching={this.props.isFetching}
	              follow={this.props.follow} unFollow={this.props.unFollow}/>
	    </div>
	  );
	}  
}

const mapStateToProps = (state) => {
	return {
      currentPage: state.users.currentPage,
      count: state.users.count,
      totalCount: state.users.totalCount,
      items: state.users.items,
      isFetching: state.users.isFetching,
      isAuth: state.auth.isAuth,
      toggleFollowingProgress: state.users.toggleFollowingProgress
	};
};

export default connect(mapStateToProps, {setUsers: setUsersThunk, follow: FollowThunk, unFollow: unFollowThunk})(UsersContainer);
*/