import {Field} from 'redux-form';
import s from './formControl.module.css';

const CommonPropertiesFields = ({input, meta, ...props}) => {
  
  const hasError = meta.error && meta.visited;

     return <span className={hasError ? s.formControl + ' ' + s.errorLoginField : ''}>             
              {props.children}
              {hasError && <span>{meta.error}</span>}
            </span>
};


export const Textarea_3 = (props) => {
	let {input, meta, ...restProps} = props;
	return <CommonPropertiesFields {...props}>
               <textarea {...input} {...restProps} />
	       </CommonPropertiesFields>
};

export const Input = (props) => {
  let {input, meta, ...restProps} = props;
  return <CommonPropertiesFields {...props}><input {...input} {...restProps} /></CommonPropertiesFields>   
};


export const Textarea = (props) => {
    let {input, meta, ...restProps} = props;
      
    return <CommonPropertiesFields {...props}><textarea {...input} {...restProps} /></CommonPropertiesFields>
};

/* 

export const Textarea_2 = ({meta, input, ...props}) => {
  
   return <div className={(meta.error ? s.formControl + ' ' + s.errorLoginField : '')}>
             <textarea  {...props.input} {...props}/>
          </div> 
          {meta.error && <span>{meta.error}</span>}
};

*/

/*
const CommonField = ({input, meta, child, props}) => {
	const hasError = meta.error && meta.visited;

	return <div className={(hasError ?  s.formControl + ' ' + s.errorLoginField : '')}>
	        {props.children}
	        {hasError && <span>{meta.error}</span>}
	       </div>
};
*/