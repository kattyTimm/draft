import React from 'react';
import {connect} from 'react-redux';
import s from './Users.module.css';

import {setUsersThunk, setCurrentPageAC, followThunk, unFollowThunk} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Preloader/Bean Eater-1s-200px.gif';


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

    if(this.props.isFetching){
        return <div className={s.preloaderDiv}>
                  <img src={Preloader} />
                </div>
    }                                  

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
                                         unfollow :unFollowThunk})(UsersContainer);
       
/* 
пример как выглядит mapDispatchToProps

const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    onClick: (event) => dispatch(trackClick(event)),

    // implicitly forwarding arguments
    onReceiveImpressions: (...impressions) =>
      dispatch(trackImpressions(impressions)),
  }

*/