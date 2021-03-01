import React from 'react';

const UsersContainer = () => {
    return 'UsersContainer';
}

export default UsersContainer;

/*import {connect} from 'react-redux';

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