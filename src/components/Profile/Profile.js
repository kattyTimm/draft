import React, {useEffect, useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Profile.module.css';

import ProfileStatus from './ProfileStatusWithHooks';
import AboutMeComponent from './AboutMeComponent';
import ProfileInfo from './ProfileInfo';
import Preloader from '..//Preloader/Bean Eater-1s-200px.gif';
import preloadStls from '../Users/Users.module.css'; 

import userPhoto_64 from '../../assets/imgs/userPhoto_64.png';
import {Textarea_3} from '../../common/formControl';
import {minLength} from '../../common/validators';

//   <AboutMeComponent profile={props.profile} />     здесь было Viiiii

const minLength_2 = minLength(2);

const Profile = props => {

    console.log(props.isOwner)
/* 
  let [photos, setPhoto] = useState(props.profile.photos.large);

  useEffect(() => {
     setPhoto(props.profile.photos.large);  
  }, [props.profile.photos.large] ); 
*/

  const [value, setValue] = useState('');

  const onSubmit = (data) => {
    if(data.newPost){
        props.addPost(data.newPost)
        setValue(''); 
    }
   
  };  


const onLoadPhoto = (e) => {
    if(e.target.files.length){
        props.updatePhoto_My(e.target.files[0], props.autorizedUserId);
           
     }
  };

    if(!props.profile) return  <div className={preloadStls.preloaderDiv}>
                                  <img src={Preloader} />
                                </div>
   
	return <div>  
               <div className={s.profileContainer}>   

               <div className={s.avaTmp}>
                 <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto_64} 
                      className={s.ava} width="200" height="200 " />
                 {props.isOwner && <div><input  type='file' onChange={onLoadPhoto} title="" /></div>}
               </div>

               <div className={s.contactsTmp}>

                   <ProfileStatus status={props.status} updateStatus={props.updateStatus} 
                                                        updateStatus_My={props.updateStatus_My} />
                           

                   <ProfileInfo profile={props.profile} match={props.match} isAuth={props.isAuth} 
                                 autorizedUserId={props.autorizedUserId} isOwner={props.isOwner}
                                 updateProfile={props.updateProfile} updateProfile_My={props.updateProfile_My}/>   
                
               </div>
              </div>
  
              {props.isOwner &&
                  <div className={s.postFormTmp}>  
                    <PostFormReduxForm onSubmit={onSubmit} value={value}  />
                  </div>
              }
             
          </div>

}

const PostForm = (props) => {

    const stylesArea = {
        paddingTop: '15px',
        display: 'flex',
        justifyContent: 'center'   
    }; 

   return  <form onSubmit={props.handleSubmit}>
               <div style={stylesArea}>
                  <Field className={s.postArea} name='newPost' component={Textarea_3} validate={[]} placeholder='введите сообщение'/>
                </div>

               <div style={stylesArea}>
                 <button style={{marginBottom: '15px', cursor: 'pointer'}}>опубликовать</button>
              </div>
            </form>
};


const PostFormReduxForm = reduxForm({
     form: 'addPost'
  })(PostForm);


export default Profile;



const MiniApp = () => {
    // массив.splice(откуда удаляем, сколько элементов удаляем, [вставить элемент], [вставить элемент]...);

  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  const changeHandler = (index, ev) => {
  //  setNotes( [...notes.slice(0, index), ev.target.value, ...notes.slice(index +1)] );
  let copy = [...notes];
  copy.splice(index, 1, ev.target.value);
  setNotes(copy);
  }
  
  const getSum = (arr) => {
    let sum = 0;
    
    for (const elem of arr) {
      sum += +elem;
    }
    
    return sum;
  }

  const middleRes = (arr) => {
     let sum = 0;
    
    for (const elem of arr) {
      sum += +elem;
    }

    sum = sum / arr.length;
    
    return sum;
  }

  const result = notes.map((note, index) => {
    return <input key={index} onChange ={(ev) => changeHandler(index, ev)} value={note}/>;
  });

  
  return <div>
    {result}
    <p>{getSum(notes)}</p>
    <p>{middleRes(notes)}</p>
  </div>;
}

const FFF = () => {
   let [notes, setNotes] = useState([1, 2, 3, 4, 5]);

   let items= notes.map((e, i) => <span key={i}>{e}</span>)

   const onSetNotes = () => {
    //массив.slice(откуда отрезать, [докуда отрезать])


    let index = 1;
     //let copy = Object.assign([], notes);
     let copy = [... notes];
    // setNotes([...notes.slice(0, index), '!', ...notes.slice(index + 1)])
      copy.splice(1, 1, '!');
     //copy.push(6);
     setNotes(copy);
     console.log(notes);
   
   };

   return <div>
            {items}
            <button onClick={onSetNotes}>press</button>
          </div>
};

const Tester = () => {
  let [value, setValue] = useState('');
  const texts = ['php', 'js', 'java'];
  const [checked, setChecked] = useState(0);

  const onSetValue = (e) => {
    
   setValue(e.target.value);
   setChecked(e.target.name);
   console.log(checked);
  };

  let radios = texts.map((t, i) => {
      return <span key={i}>
               <span>{t}</span>
               <input type="radio" name={i} value={t} checked={checked == i ? true : false}
               onChange={onSetValue} />
             </span>
});



 return  <div>
    {radios}
    <p>{value}
       <span>{value === 'js' && ')*)*)*'}</span>  
    </p>
  </div>
};


/*

    <input
      type="radio"
      name="radio"
      value="1"
      checked={value === '1' ? true : false}
      onChange={changeHandler}
      />
*/