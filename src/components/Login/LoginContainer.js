import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import s from './login.module.css';

import {loginThunk} from '../../redux/authReducer';
// import {login_Thunk} from '../../redux/loginReducer';
import Login from './Login'; 

class LoginContainer extends React.Component{

	constructor(props, state){
		super(props, state);

		this.props = props;
        this.state = state;

        this.state = {
        	editVode: false,
        	captchaText : ''
        };
	}

    onSubmit = (formData) => {
    	let {email, password, rememberMe} = formData;
    	this.props.login(email, password, rememberMe);    	
    }

	render(){
        if(this.props.isAuth) return <Redirect to='/profile' />

	    return <div className={s.loginPageTmp}> 
	             <Login onSubmit={this.onSubmit} captcha={this.props.captcha} />            
	           </div>  
    }       
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		captcha: state.auth.captcha
	};
};

export default connect(mapStateToProps, {login: loginThunk})(LoginContainer);
