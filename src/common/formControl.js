import {Field} from 'redux-form';
import s from './formControl.module.css';

const CommonPropertiesFields = ({input, meta, ...props}) => {
  
  const hasError = meta.error && meta.visited;

     return <span className={hasError ? s.errorLoginField : ''}>             
              {props.children}
              {hasError && <span>{meta.error}</span>}
            </span>
};


export const Textarea_3 = (props) => {
	let {input, meta, ...restProps} = props;

    const styles = {
        borderRadius: '5px'
      }; 

    if(meta.error && meta.visited)  styles.border = '2px solid red' ;    

	return <CommonPropertiesFields {...props}>
               <textarea {...input} {...restProps} style={styles} />
	       </CommonPropertiesFields>
};

export const Input = (props) => {
  let {input, meta, ...restProps} = props;

  const styles = {
    borderRadius: '5px'
  }; 

  if(meta.error && meta.visited)  styles.border = '2px solid red' ;
    
  return <CommonPropertiesFields {...props}>
            <input {...input} {...restProps} style={styles} />
         </CommonPropertiesFields>   
};

