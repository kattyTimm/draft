import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import ProfileContainer from './components/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Dialogs from './components/Dialogs';
import HeaderContainer from './components/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';

function App() {
  return (
   
        <div className="App">
            <HeaderContainer />
            <div className="Navbar">
                 <Navbar />
            </div>

            <div className="content">
              <Route path="/login" render={ () => <LoginContainer />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer /> } />
              <Route path="/users" render={() => <UsersContainer /> } />
              <Route path="/dialogs" render={() => <Dialogs /> } />
            </div>
           
        </div>

  );
}

export default App;
/*

*/