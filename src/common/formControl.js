import {Field} from 'redux-form';
import s from './formControl.module.css';

export const Textarea = ({input, meta, ...props}) => {
  return <textarea {...input} {...props}/>   
};

export const Input = ({input, meta, ...props}) => {
	const hasError = meta.error && meta.visited;
	console.log({input, meta, ...props});
     return <span className={hasError ? `${s.formControl} {s.errorLoginField}` : ''}>
              <input {...input} {...props} />  
              {hasError && <span>{meta.error}</span>}
            </span>
};