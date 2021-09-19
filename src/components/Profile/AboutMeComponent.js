import React, {useState} from 'react';

const AboutMeComponent = props => {

  let [editMode, setEditMode] = useState(false);
  let [aboutMe, setAboutMe] = useState(props.profile.aboutMe);

  const onAboutMeChange = (e) => {
      setAboutMe(e.target.value);
  }

  const updateAboutMe = () => {
    setAboutMe(aboutMe);
       setEditMode(false);
       console.log(aboutMe);
  }

	return (
          <div>
             {!editMode && 
                <div onDoubleClick={() => setEditMode(true)}>
                   {props.profile.aboutMe || ''}
                </div>
              }
              {editMode && 
                <input value={aboutMe} onChange={onAboutMeChange}  onBlur={updateAboutMe} />
              }
          </div>
          )

}


export default AboutMeComponent;