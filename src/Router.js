import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/modules/Home';
import Login from './components/modules/Login';
import Registration from './components/modules/Registration';

export default (props) => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Registration}/>
      <Redirect to = '/'></Redirect>
    </Switch>
);