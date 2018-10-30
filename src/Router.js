import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './containers/auth/Login.container';
import Registration from './containers/auth/Registration.container';
import Main from './containers/main/Main.container';
import Profile from './containers/profile/Profile.containers';

export default (props) => (
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Registration}/>
      <Route path='/profile' component={Profile}/>
      <Redirect to = '/'></Redirect>
    </Switch>
);