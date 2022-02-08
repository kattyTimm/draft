import React, {useState, useEffect} from 'react';
import s from './Profile.module.css';

import {Input} from '../../common/formControl';
import {minLength} from '../../common/validators';


const ProfileStatusWithHooks = props => {  

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  let [status_, setStatus_] = useState(props.status);

  useEffect(() => {
  
     setStatus_(props.status);  
  }, [props.status] );


  const onUpdateStatus = () => {
    props.updateStatus(status);
    setEditMode(false);
  }

  const onUpdateStatus_ = () => {
     props.updateStatus_My(status_);
     setEditMode(false);
  }

   const startEdit = () => {
    setEditMode(true);
  }

	return  <div className={s.statusTmp}> 
               <span style={{marginRight: '10px'}}>
                   статус: 
                </span>

               {editMode && 
                   <input autoFocus={true} value={status_} onChange={e => setStatus_(e.target.value)} onBlur={() => onUpdateStatus_()} /> 
               } 
                {!editMode && 
                   <div >
                      <span onClick={() => startEdit()}>
                         {status_ || 'write you status'}
                      </span>                      
                   </div>
               }

            </div>

}


export default ProfileStatusWithHooks;

/*{editMode && 
                  <input autoFocus={true} value={status}  onChange={ (e) => onStatusChange(e)} onBlur={(e) => onUpdateStatus() }/>               
               } 
               {!editMode &&
                 <div onDoubleClick={() => {setEditMode(true)} }>
                    {props.status || '--------------'} 
                 </div> 
               }*/