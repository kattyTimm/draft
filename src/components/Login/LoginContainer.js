import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {loginThunk} from '../../redux/authReducer';
import Login from './Login';

class LoginContainer extends React.Component{

    onSubmit = (formData) => {
    	let {email, password, rememberMe} = formData;
    	this.props.login(email, password, rememberMe);
    	//console.log(email, password, rememberMe);
    }

	render(){
        if(this.props.isAuth) return <Redirect to='/profile' />

	    return <> 
	             <Login onSubmit={this.onSubmit}/>
	           </>  
    }       
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	};
};

export default connect(mapStateToProps, {login: loginThunk})(LoginContainer);
