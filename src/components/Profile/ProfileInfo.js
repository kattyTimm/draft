import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form';

import s from './Profile.module.css';

import userPhoto_64 from '../../assets/imgs/userPhoto_64.png';
import {Textarea_3, Input} from '../../common/formControl';
import {minLength, requiredField} from '../../common/validators';

const minLength_2 = minLength(2);

const ProfileInfo = props => {

  let [editMode, setEditMode] = useState(false);


 const onUpdateProfile = (formData) => {
  // санка должна быть async - await, тогда она вернет промис и можно будет использовать then
     props.updateProfile(formData).then( () => setEditMode(false));
  // props.updateProfile(formData).then( () => {
    //  setEditMode(false);
  // });
 }

	return <>
            {!editMode 
              ? <ProfileData profile={props.profile} isOwner={props.isOwner} setEditMode={setEditMode}/>
              : <EditProfileReduxForm onSubmit={onUpdateProfile} profile={props.profile} initialValues={props.profile} /> // initialValues={props.profile} - записывает начальные значения в форме redux-form
            }  
         </>  
}


const Contact = props => {
   return <div> 
             {props.objectKey}: {props.value}  
          </div>   
};

const Contact_2 = props => {
  return <div>
              <b>{props.objectKey}:</b> <i>{props.value}</i>
         </div>   
};


const ProfileData = props => {
    return (  
        <div className={s.profileInfoBlock}> 
             <div>
                  <span>name: {props.profile.fullName}</span>
              </div> 
              <div>
                  <span>about me: {props.profile.aboutMe}</span>
              </div> 
               <div>                  
                  <span>looking job: {props.profile.lookingForAJob ? "yes" : "no"}</span>
              </div> 
               {props.profile.lookingForAJob && 
                   <span>{props.profile.lookingForAJobDescription}</span>
               }
             
               {Object.keys(props.profile.contacts).map((c, i) => <Contact_2 key={i}  objectKey={c} value={props.profile.contacts[c]} />) }

               {props.isOwner && <button onClick={ () => props.setEditMode(true) }>edit</button>}
         </div>
        ) 
};


const EditProfile = props => {

  return <form onSubmit={props.handleSubmit} className={(props.error) ? s.errorBorder : ''}>
             <div>
                <label htmlFor='fullName'>name</label>
                <Field name='fullName'component={Input} type='text' validate={ [requiredField, minLength_2]} />
             </div> 
              <div>
                <label htmlFor='aboutMe'>about me</label>
                <Field name='aboutMe'component={Input} type='text' validate={ null} />
              </div> 
               <div>
                <label htmlFor='lookingForAJob'>looking job</label>
                <Field name='lookingForAJob'component={Input} type='checkbox' validate={null} />
              </div>
               <div>
                <label htmlFor='lookingForAJobDescription'>job description</label>
                <Field name='lookingForAJobDescription'component={Textarea_3} type='checkbox' validate={minLength_2} />
              </div>

              <div><b>contacts :</b>
                   {Object.keys(props.profile.contacts).map((c,i) => {
                     return <div key={i}>
                               <label htmlFor={c}>{c}: </label>
                               <Field name={'contacts.'+c} component={Input} type='text' validate={minLength_2} />
                            </div> 
                   })}
              </div>  

          {props.error && <div className={s.commonError}>{props.error}</div>}    
          <button>send</button>
         </form>
};

/*
    <div><b>contacts :</b>
                {Object.keys(props.profile.contacts).map((c, i) => {
                   return <div key={i}>
                              <span>
                                <label htmlFor={c}>{c}: </label>
                                <Field name={'contacts.'+c} component={Input} type='text' validate={minLength_2} />
                              </span>
                          </div>  
                })}
              </div>

*/

const EditProfileReduxForm = reduxForm({
   form: 'editProfile'
})(EditProfile);

export default ProfileInfo;

/*

 <div>
              <label htmlFor='fullName'>name</label>
              <Field name='fullName'component={Input} type='text' validate={ [requiredField, minLength_2]} />
           </div> 
            <div>
              <label htmlFor='aboutMe'>about me</label>
              <Field name='aboutMe'component={Input} type='text' validate={ [requiredField, minLength_2]} />
            </div> 
             <div>
              <label htmlFor='lookingForAJob'>looking job</label>
              <Field name='lookingForAJob'component={Input} type='checkbox' validate={null} />
            </div>
             <div>
              <label htmlFor='lookingForAJobDescription'>job description</label>
              <Field name='lookingForAJobDescription'component={Textarea_3} type='checkbox' validate={minLength_2} />
            </div>
            <div><b>contacts :</b>
              {Object.keys(props.profile.contacts).map((c, i) => {
                 return <div key={i}>
                            <span>{c} :</span>
                            <span>
                              <label htmlFor={c}>job description</label>
                              <Field name={c}component={Input} type='text' validate={minLength_2} />
                            </span>
                        </div>  
              })}
            </div>
          <button>send</button>

aboutMe: "ok"
contacts: {facebook: "vk.com", website: null, vk: null, twitter: null, instagram: null, …}
fullName: "Katty"
lookingForAJob: true
lookingForAJobDescription: "react"
photos: {small: "https://social-network.samuraijs.com/activecontent/images/users/6858/user-small.jpg?v=51", large: "https://social-network.samuraijs.com/activecontent/images/users/6858/user.jpg?v=51"}
userId: 6858
*/
