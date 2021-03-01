import React from 'react';
import {Field, reduxForm } from 'redux-form';

import {createFiled} from '../../common/createFiled';
import {requiredField, minLength} from '../../common/validators';

const minLength_2 = minLength(2);

let Login = props => {

  return (
    <form onSubmit={props.handleSubmit}>

     <div>
            <label htmlFor='email'>email</label>
            <Field name='email'component='input' type='text' validate={ [requiredField, minLength_2]} />
         </div>   
    
       <button type="submit">Submit</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(Login);

export default LoginReduxForm;

/*   { createFiled('email', 'input', 'text', 'email', [requiredField, minLengthTWO]) }
       { createFiled('password', 'input', 'password', 'password', [requiredField]) }
       { createFiled('rememberMe', 'input', 'checkbox', 'remember me') }*/