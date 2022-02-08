import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom'; //withRouter дает возможность кидать в пропсы данные из урла и другие данные
import s from './Profile.module.css';

import { setUserPrifileThunk, setNewPostTextAC, getUserStatusThunk, showStatusInputAC,
         updateStatusThunk, updateUserProfileThunk, updatePhotoThunk, saveNewProfileData_2, 
         setProfile_Thunk, setStatus_Thunk, updateStatus_thunk, updateProfile_Thunk, updatePhoto_Thunk} from '../../redux/profileReducer'; //setUserPrifileThunk
import Profile from './Profile';
import MyPostsContainer from '../MyPosts/MyPostsContainer';


class ProfileContainer extends React.Component{

	componentDidMount(){		
     this.refresfProfile();

    // this.props.setProfile_My(this.props.autorizedUserId);
  } 

  componentDidUpdate(prevProps, prevState){
    if(this.props.match.params.userId !== prevProps.match.params.userId){
        this.refresfProfile();
    }    
  }


  refresfProfile(){
     let userId = this.props.match.params.userId;
    
    if(!userId){
 
         userId = this.props.autorizedUserId;
         /* можно сделать редирект в componentDidMount(не в разметке) через history.push('/login'), при условии что компонента обернута withRouter
         if(!userId) this.props.history.push('/login');
        */
    }

      this.props.setProfile_My(userId);
      this.props.setStatus_My(userId);
  }

	render(){
       
      if(!this.props.isAuth) return <Redirect to='/login' />

    	return <div className={s.container}>
                
               
                 <Profile status={this.props.status} profile={this.props.profile}
                        autorizedUserId={this.props.autorizedUserId}
                        match={this.props.match} isAuth={this.props.isAuth}
                        isOwner={!this.props.match.params.userId}
                        createNewPost={this.props.createNewPost} addPost={this.props.addPost} 
                        updateStatus={this.props.updateStatus} updateProfile={this.props.updateProfile} 
                        updatePhoto={this.props.updatePhoto} updateStatus_My={this.props.updateStatus_My}
                        updateProfile_My={this.props.updateProfile_My} updatePhoto_My={this.props.updatePhoto_My} />
                   
                 {  this.props.match.params.userId === undefined &&
                     <MyPostsContainer posts={this.props.post}/> 
                 }
                   
               
                 
             </div>      
	}
}

const mapStateToProps = (state) => {
   return {
      profile: state.profile.profile,
      isAuth: state.auth.isAuth,
      autorizedUserId: state.auth.id,
      newPostText: state.profile.newPostText,
      post: state.profile.post,
      status: state.profile.status
   };
};

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile: setUserPrifileThunk, 
                                         addPost: setNewPostTextAC,
                                         getStatus: getUserStatusThunk,
                                         updateStatus: updateStatusThunk,
                                         updateProfile: saveNewProfileData_2,
                                         updatePhoto: updatePhotoThunk, 
                                         setProfile_My: setProfile_Thunk,
                                         setStatus_My: setStatus_Thunk,
                                         updateStatus_My: updateStatus_thunk, 
                                         updateProfile_My: updateProfile_Thunk,
                                         updatePhoto_My: updatePhoto_Thunk})(ProfileContainerWithRouter);



