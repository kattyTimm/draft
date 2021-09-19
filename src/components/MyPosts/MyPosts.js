import React from 'react';

import userPhoto_64 from '../../assets/imgs/userPhoto_64.png';

const Profile = props => {

  if(!props.profile) return <div>'крутилка'</div>

	return <div> 
              <div>
                 <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto_64} />
              </div>
              <div> 
                {props.profile.aboutMe}
                {props.profile.userId}
              </div>
          </div>

}

export default Profile;