import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ThankYou from './components/ThankYou/ThankYou'
import Landing from './components/Landing/Landing';
import Shop from './components/Shop/Shop';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';

export default (
  <Switch>
    <Route component={ Landing } exact path='/' />
    <Route component={ Shop } path='/shop' />
    <Route component={ Cart } path='/cart' />
    <Route component={ Details } path='/details/:name' /> 
    <Route component={ ThankYou } path='/thank-you' />
  </Switch>
)

