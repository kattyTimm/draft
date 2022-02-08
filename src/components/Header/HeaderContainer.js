import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import s from './header.module.css';
import navStls from '../navbar.module.css';

import {logoutThunk} from '../../redux/authReducer';
import {logout_Thunk} from '../../redux/loginReducer';


class HeaderContainer extends React.Component {
//{this.props.login && this.props.login}
  render(){
    return <div className={s.header}>
              
              {this.props.login && <button className={s.exitBtn} onClick={this.props.logout}>
                                       выход
                                    </button>}

              {!this.props.isAuth && 

                  <NavLink to='/login'  activeClassName={navStls.activeLink} className={navStls.link}> 
                     логин
                  </NavLink>
              }

           </div>
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }; 
};

export default connect(mapStateToProps, {logout: logout_Thunk})(HeaderContainer);

// //if(!this.props.isAuth) return <Redirect to="login" />
