import React, {useState} from 'react';
import {Field, reduxForm } from 'redux-form';

import {createFiled} from '../../common/createFiled';
import {requiredField, minLength} from '../../common/validators';
import {Input} from '../../common/formControl';
import s from './login.module.css';

const minLength_2 = minLength(2);

let Login = props => {

  let [captchaText, setCaptchaText] = useState('');

  return (
    <form onSubmit={props.handleSubmit}>

     <div>
        <label htmlFor='email'>email</label>
        <Field name='email'component={Input} type='text' validate={ [requiredField, minLength_2]} />
     </div> 
     <div>
        <label htmlFor='password'>email</label>
        <Field name='password'component={Input} type='password' validate={ [requiredField, minLength_2]} />
     </div> 
     <div>
        <label htmlFor='rememberMe'>remember Me</label>
        <Field name='rememberMe'component={Input} type='checkbox'  />
     </div>   

       {props.captcha &&
          <>
            <img src={props.captcha} />
            <label htmlFor='captcha'>remember Me</label>
            <Field name='captcha'component={Input} type='text' validate={[requiredField]} />
          </>
       }
       
       {props.error && <div className={s.formCommonError}>{props.error}</div>}
       <button type="submit">Submit</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(Login);

export default LoginReduxForm;

/*   
{props.captcha && 
                <>
                  <img src={props.captcha} />
                   <div>
                      <label htmlFor='captcha'>captcha</label>
                      <Field name='captcha'component={Input} type='text' validate={ [requiredField] } />
                   </div> 
                </>
        }


*/