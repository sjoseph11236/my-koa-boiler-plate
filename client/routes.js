import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';
import { SignIn , Register } from './components';

const Routes = () => {
  return ( 
    <Switch>
      <Route exact path='/' />
      <Route exact path='/sign' />
      <Route exact path='/register' />
    </Switch>
  );
}

export default Routes;