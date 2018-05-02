import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import PasswordRecovery from '../PasswordRecovery/PasswordRecovery';
import ResetPassword from '../ResetPassword/ResetPassword';
import ProjectsList from '../ProjectsList/ProjectsList';
import LocalesList from '../LocalesList/LocalesList';
import TranslationsList from '../TranslationsList/TranslationsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ProjectsList}/>
          <Route path='/sign_in' component={SignIn}/>
          <Route path='/sign_up' component={SignUp}/>
          <Route path='/password_recovery' component={PasswordRecovery}/>
          <Route path='/reset_password' component={ResetPassword}/>
          <Route path='/:project_id/locales/:locale_id' component={TranslationsList}/>
          <Route path='/:project_id' component={LocalesList}/>
        </Switch>
      </div>
    );
  }
}

export default App;
