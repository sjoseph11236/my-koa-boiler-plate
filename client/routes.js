import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';
import { SignIn , Register } from './components';

const Routes = () => {
  return ( 
    <Switch>
      <Route exact path='/' />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/register' component={Register} />
    </Switch>
  );
}

export default Routes;