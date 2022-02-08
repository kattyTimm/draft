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
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';

import Preloader from './components/Preloader/Bean Eater-1s-200px.gif';
import preloadStls from './components/Users/Users.module.css'; 
//import Learning from './components/Learning.js';

import {initialazedThunk, unCautchedErrorsThunk} from './redux/appReducer';

class App extends React.Component{

  constructor(state, props){
    super(state, props);

    this.unCautchRejections = this.unCautchRejections.bind(this);
    this.hide = true;
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


//Пока не пришли данные с сервера надо показать прелоадер!, иначе в запросах повалятся ошибки, 
//      возвращать компоненты надо только после того как пришли инициализонные данные

  render(){

    if(!this.props.initialazed){
      return <div className={preloadStls.preloaderDiv}>
                  <img src={Preloader} />
                </div>
    } 

    return (
     
          <div className="App">
              <div className="header-container">
                <div className="Navbar">
                     <Navbar />
                </div>
                <HeaderContainer />
              </div>

              <div className="content">
                <Switch>
                  <Route exact path="/" render={() => <Redirect to="profile" />} /> 

                  <Route path="/login" render={ () => <LoginContainer />} />
                  <Route path="/profile/:userId?" render={() => <ProfileContainer /> } />
                  <Route path="/users" render={() => <UsersContainer /> } />

                  <Route path='/draft' render={() => <Redirect to="profile" />} /> 
           
                  <Route path='*' render={() => <div>404 not found</div>} /> 
                </Switch>

               
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

/* 

  {this.props.globalUncautched && <div id='error_div'>ooops, some error</div>}
                 {!this.hide && <p>какое-то нехорошее сообщение</p>}

по моему withRouter надо обернкть для того чтобы Route работали корректно, так как тдет обертка connect*/

      // <Route path="/dialogs" render={() => <Dialogs /> } />
        //          <Route path="/learning" render={() => <Learning /> } />


