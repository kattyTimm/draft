import React, {useState} from 'react';
import {Field, reduxForm } from 'redux-form';

import {createFiled} from '../../common/createFiled';
import {requiredField, minLength} from '../../common/validators';
import {Input} from '../../common/formControl';
import s from './login.module.css';

const minLength_2 = minLength(2);

const Login = props => {

  // здесь props.error - это ошибка с сервера

  let [captchaText, setCaptchaText] = useState('');

  return (
    <form onSubmit={props.handleSubmit}>
     <table>
       <tr>
          <td><label htmlFor='email'>логин:</label></td>
          <td><Field name='email'component={Input} type='text' validate={ [requiredField, minLength_2]} /></td>
       </tr> 

       <tr>
          <td><label htmlFor='password'>пароль:</label></td>
          <td><Field name='password'component={Input} type='password' validate={ [requiredField, minLength_2]} /></td>
       </tr>   

         {props.captcha &&
            <>
              <img src={props.captcha} />
              <label htmlFor='captcha'>captcha</label>
              <Field name='captcha'component={Input} type='text' validate={[requiredField]} />
            </>
         }        

         <tr>
           <td><button type="submit">войти</button></td>
         </tr>

         {props.error && 
            <tr className={s.formCommonError}>
               <td colspan="2">{props.error}</td>
            </tr>
          }

       </table>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(Login);

export default LoginReduxForm;

/*   
    <div>
          <label htmlFor='rememberMe'>remember Me</label>
          <Field name='rememberMe'component={Input} type='checkbox'  />
       </div> 

*/