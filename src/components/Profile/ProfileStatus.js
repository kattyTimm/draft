import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {Input} from '../../common/formControl';
import {minLength} from '../../common/validators';

const minLength_2 = minLength(2);


class ProfileStatus extends React.Component{  

  constructor(props, state){     

     super(props,state);
     this.props = props;
     this.state = state;

    this.state = {
      status: this.props.status,
      editMode: false
    };

  }


componentDidMount(){
 
}

  onSubmit = (data) => {
    console.log(data);
  }

  showInput = () => {
    this.setState({editMode: true});
  };

  onGetStatus = (e) => {
    this.setState({
        status: e.target.value
    });
  }

  onStatusChange = () => {
     this.setState({
        editMode: false
    });

    this.props.updateStatus(this.state.status);

  };

  componentDidUpdate(prevProps, prevState){
 
      if (prevProps.status !== this.props.status){ // || prevState.status !== this.state.status

         this.setState({status: this.props.status});
      }  
  }

  /* Есди захардкодить в value значение из статуса из пропсов, то value инпута нельзя будет изменить*/

  render(){

  	return <div> 
               {this.state.editMode && 
                  <input autoFocus={true} value={this.state.status} onChange={this.onGetStatus.bind(this)} onBlur={this.onStatusChange.bind(this)}/>               
               } 
               {!this.state.editMode &&
                 <div onDoubleClick={this.showInput}>
                    {this.props.status || '--------------'} 
                 </div> 
               } 
            </div>
  }
}

/*

{this.props.status && <span onDoubleClick={this.props.showStatusInput}>{this.props.status}</span>}
               {this.props.showInput && <StatusReduxForm onSubmit={this.onSubmit}/>}

                   if(!this.props.status) return 'preloader status';
*/


const StatusForm = props => {
  return <form onSubmit={props.handleSubmit}>
            <Field component={Input} name='status' validate={minLength_2} /> 
          </form>  
};

const StatusReduxForm = reduxForm({form: 'status'})(StatusForm);

export default ProfileStatus;