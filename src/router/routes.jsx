import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/home/Home';
import Login from '../views/login/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exactpath="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
