import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import '../assets/style/style.css';
import HomeContainer from '../components/Home';
import HeaderContainer from '../components/Header';
import SignInContainer from '../components/SignIn';
import SignUpContainer from '../components/SignUp';
import ErrorsContainer from '../components/Errors';
import UserContainer from '../components/User';
import NotFound from '../components/NotFound';

export default (
  <BrowserRouter>
    <HeaderContainer />
    <ErrorsContainer />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/user/:username" component={UserContainer} />
      <Route exact path="/signin" component={SignInContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route path="/notfound" component={NotFound} />
      <Redirect from="*" to="/notfound" />
    </Switch>
  </BrowserRouter>
);
