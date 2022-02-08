import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form';

import s from './Profile.module.css';

import userPhoto_64 from '../../assets/imgs/userPhoto_64.png';
import {Textarea_3, Input} from '../../common/formControl';
import {minLength, requiredField} from '../../common/validators';

const minLength_2 = minLength(2);


const ProfileInfo = props => {

  const [editMode, setEditMode] = useState(false);

  const onhandleSubmit = formData => {
      console.log(formData);
      props.updateProfile_My(formData);
      setEditMode(false);
  };

  return <> 
            {editMode && <ProfileEditComponent_ReduxForm profile={props.profile} onSubmit={onhandleSubmit} initialValues={props.profile} />}
            {!editMode && <Profile_YouSelf profile={props.profile} setEditMode={setEditMode} isOwner={props.isOwner} />} 
         </>
};


const Profile_YouSelf = props => {

    return (<div className={s.infoTmp}>
              <table>

                  <tr>
                    <td>имя: </td>
                    <td>{props.profile.fullName}</td>
                  </tr> 

                  <tr>
                     <td>обо мне: </td> 
                     <td>{props.profile.aboutMe}</td>
                  </tr>

                  <tr>                  
                   <td>ищу работу:</td>
                   <td>{props.profile.lookingForAJob ? "да" : "нет"}</td>
                 </tr>

                {props.profile.lookingForAJob &&  
                 <tr>
                    <td>описание: </td>
                    <td>{props.profile.lookingForAJobDescription}</td>
                 </tr>
                }  
                 
                <tr>
                  <td>контакты:</td>
                </tr>
                
                 {Object.keys(props.profile.contacts).map((c, i) =>  {                
                     return (props.profile.contacts[c] !== null) ? <Contact_3 key={i} objectKey={c} constact={props.profile.contacts[c]} />  : ''
                  })}             

                  {props.isOwner && <tr><td><button onClick={() => props.setEditMode(true)}>редактировать</button></td></tr>}

            </table>
            </div>);
};



const ProfileEditComponent = props => {

  return <form onSubmit={props.handleSubmit} className={(props.error) ? s.errorBorder : ''} className={s.infoTmp}>
            <table>
             <tr>
                <td><label htmlFor='fullName'>имя:</label></td>
                <td><Field name='fullName'component={Input} type='text' validate={ [requiredField, minLength_2]} /></td>
             </tr> 

              <tr>
                <td><label htmlFor='aboutMe'>обо мне: </label></td>
                <td><Field name='aboutMe'component={Input} type='text' validate={ null} /></td>
              </tr> 

               <tr>
                <td><label htmlFor='lookingForAJob'>ищу работу: </label></td>
                <td><Field name='lookingForAJob'component={Input} type='checkbox' validate={null} /></td>
              </tr>

               <tr>
                <td><label htmlFor='lookingForAJobDescription'>описание:</label></td>
                <td><Field name='lookingForAJobDescription'component={Textarea_3} type='checkbox' validate={minLength_2} /></td>
              </tr>

              <tr>
                <td>контакты :</td>
              </tr>

                   {Object.keys(props.profile.contacts).map((c,i) => {
                     return <tr key={i}>
                               <td><label htmlFor={c}>{c}: </label></td>
                               <td><Field name={'contacts.'+c} component={Input} type='text' validate={minLength_2} /></td>
                            </tr> 
                   })}
              

             {props.error && <div className={s.commonError}>
                               {props.error}
                          </div>}    

             <tr>
                <td><button>отправить</button></td>
             </tr>
          </table>
         </form>

};

const ProfileEditComponent_ReduxForm = reduxForm({form: 'profileEditComponent'})(ProfileEditComponent);


const ProfileInfo_ = props => {

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


const Contact_3 = props => {
   return  <>{props.constact.length > 0 &&
              <tr>
                <td >{props.objectKey}: </td>
                <td><a href={props.constact} target="_blanck">{props.constact}</a></td>
              </tr>           
           }</>
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
             
              {Object.keys(props.profile.contacts).map((c, i) => <Contact_3 key={i}  objectKey={c} constact={props.profile.contacts[c]} />) }

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

const EditProfileReduxForm = reduxForm({
   form: 'editProfile'
})(EditProfile);



export default ProfileInfo;
