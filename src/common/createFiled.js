import {Field} from 'redux-form';

export const createFiled = (name, component, type, text, validators = []) => {
  return <div>
            <label htmlFor={name}>{text}</label>
            <Field name={name} component={component} type={type} validate={validators} />
         </div>   
};