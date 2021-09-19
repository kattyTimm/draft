import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';

import Navbar from './components/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Dialogs from './components/Dialogs';
import HeaderContainer from './components/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Learning from './components/Learning.js';

import {initialazedThunk, unCautchedErrorsThunk} from './redux/appReducer';

class App extends React.Component{

  constructor(state, props){
    super(state, props);

    this.unCautchRejections = this.unCautchRejections.bind(this);
    this.hide = false;
  }

  unCautchRejections (){
    this.props.unCautchedErrorsHandle();
  }

  componentDidMount(){    

    this.props.getInitialaze();
    window.addEventListener('unhandledrejection', this.unCautchRejections);
  }

  componentWillUnmount(){
     window.removeEventListener('unhandledrejection', this.unCautchRejections);
  }

  render(){

    if(!this.props.initialazed) return 'preloader';

    return (
     
          <div className="App">
              <HeaderContainer />
              <div className="Navbar">
                   <Navbar />
              </div>

              <div className="content">
                <Switch>
                  <Route exact path="/" render={() => <Redirect to="profile" />} /> 

                  <Route path="/login" render={ () => <LoginContainer />} />
                  <Route path="/profile/:userId?" render={() => <ProfileContainer /> } />
                  <Route path="/users" render={() => <UsersContainer /> } />
                  <Route path="/dialogs" render={() => <Dialogs /> } />
                  <Route path="/learning" render={() => <Learning /> } />
                  <Route path='*' render={() => <div>404 not found</div>} /> 
                </Switch>

                 {this.props.globalUncautched && <div id='error_div'>ooops, some error</div>}
                 {!this.hide && <p>жопа</p>}
              </div>
             
          </div>

    );
  }
}

const mapStateToProps = (state) => {
    return {
       login: state.auth.login,
       isAuth: state.auth.isAuth,
       initialazed: state.app.initialazed,
       globalUncautched: state.app.globalUncautched
    };
};

export default compose(connect(mapStateToProps, {getInitialaze: initialazedThunk, unCautchedErrorsHandle: unCautchedErrorsThunk}),
                        withRouter)(App);

/* по моему withRouter надо обернкть для того чтобы Route работали корректно, так как тдет обертка connect*/