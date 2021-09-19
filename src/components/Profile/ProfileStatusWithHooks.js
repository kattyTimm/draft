import React, {useState, useEffect} from 'react';

import {Input} from '../../common/formControl';
import {minLength} from '../../common/validators';


const ProfileStatusWithHooks = props => {  

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
     setStatus(props.status);  
  }, [props.status] );

  const onStatusChange = (e) => {
    setStatus(e.target.value);
    console.log(status);
  }

  const onUpdateStatus = () => {
    props.updateStatus(status);
    setEditMode(false);
  }

	return  <div> 
               {editMode && 
                  <input autoFocus={true} value={status}  onChange={ (e) => onStatusChange(e)} onBlur={(e) => onUpdateStatus() }/>               
               } 
               {!editMode &&
                 <div onDoubleClick={() => {setEditMode(true)} }>
                    {props.status || '--------------'} 
                 </div> 
               } 
            </div>

}


export default ProfileStatusWithHooks;

/*(e) => onStatusChange(e)*/