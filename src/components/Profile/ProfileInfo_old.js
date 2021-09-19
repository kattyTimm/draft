import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form';

import s from './Profile.module.css';

import userPhoto_64 from '../../assets/imgs/userPhoto_64.png';
import {Textarea_3, Input} from '../../common/formControl';
import {minLength, requiredField} from '../../common/validators';

const minLength_2 = minLength(2);

const ProfileInfo = props => {
 console.log(props);
  let[editMode, toggleEditMode] = useState(false);

  const contacts = Object.entries(props.profile.contacts).map( (c, i) => {
     return <div key={i}>
                {c[1] ? <span>
                          <span>{c[0]}: </span>
                          <span>{c[1]}</span>
                        </span> : ''
                }
            </div>  
  });

  const submit = (formData) => {
     props.updateProfile(formData, props.autorizedUserId);
     console.log(formData);
    toggleEditMode(false);
  }

  const contactsToProps = Object.keys(props.profile.contacts);

	return <>
          {!editMode ?
            <div className={s.profileInfoBlock}> 
              <div>
                  <span>name: {props.profile.fullName}</span>
              </div> 
              <div>
                  <span>lookingForAJob: </span>{props.profile.lookingForAJob ?  <span>yes</span> : <span>no</span>}
              </div>  
               <div>
                   {props.profile.lookingForAJob && 
                      <span>job description: {props.profile.lookingForAJobDescription}</span>  
                   }               
              </div>
              <div className={s.contactsBlock}>
                  <div className={s.contactsTitle}>my contacts: </div>
                  {contacts}
              </div>     
              {props.isAuth && props.match.params.userId === undefined && 
                              <button onClick={() => toggleEditMode(true)}>edit profile</button>} 
            </div>

            : <EditProfileReduxForm onSubmit={submit} contacts={contactsToProps} />
          }
         </>
}

const EditProfileForm = (props) => {
  
  const contacts = props.contacts.map((c, i) => {
    return <div key={i}>
              <label htmlFor={c}>{c}</label>
              <Field name={c} component={Input} type='text' validate={null} />
           </div> 
  }); 
 
  return <form onSubmit={props.handleSubmit}>
            <div>
              <label htmlFor='AboutMe'>about me</label>
              <Field name='AboutMe'component={Input} type='text' validate={ [requiredField, minLength_2]} />
           </div> 
            <div>
              <label htmlFor='fullName'>fullName</label>
              <Field name='fullName'component={Input} type='text' validate={ [requiredField, minLength_2]} />
           </div> 
           <div>
              <label htmlFor='lookingForAJob'>looking job</label>
              <Field name='lookingForAJob'component={Input} type='checkbox' validate={null} />
           </div> 
          <div>
              <label htmlFor='lookingForAJobDescription'>job description</label>
              <Field name='lookingForAJobDescription'component={Input} type='text' validate={minLength_2} />
          </div>
          <div>photo</div> 
          <div></div> 
          <button type="submit">send</button>
         </form>
};

const EditProfileReduxForm = reduxForm({form: 'editProfile'})(EditProfileForm);

export default ProfileInfo;

/*

aboutMe: "ok"
contacts: {facebook: "vk.com", website: null, vk: null, twitter: null, instagram: null, …}
fullName: "Katty"
lookingForAJob: true
lookingForAJobDescription: "react"
photos: {small: "https://social-network.samuraijs.com/activecontent/images/users/6858/user-small.jpg?v=51", large: "https://social-network.samuraijs.com/activecontent/images/users/6858/user.jpg?v=51"}
userId: 6858
*/


// <button onClick={() => props.updateProfile(props.profile, props.profile.userId)}>updateProfile</button>

/* шпаргалка

Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]
*/