import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {logoutThunk} from '../redux/authReducer';

class HeaderContainer extends React.Component {

/*  componentDidMount(){
      this.props.getCaptcha();
  }
*/

  render(){
    return <>
              {this.props.login && this.props.login}
              {this.props.login && <button onClick={this.props.logout}>logout</button>}

              {!this.props.isAuth && 

                <button>
                  <NavLink to='/login'>
                     Sing In
                  </NavLink>
                </button>
              }

           </>
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }; 
};

export default connect(mapStateToProps, {logout: logoutThunk})(HeaderContainer);

// //if(!this.props.isAuth) return <Redirect to="login" />
