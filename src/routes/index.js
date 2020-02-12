import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import '../assets/css/style.css';
import 'font-awesome/css/font-awesome.min.css';
import HeaderContainer from '../components/Header';
import ErrorsContainer from '../components/Errors';
import Footer from '../components/Footer';
import HomeContainer from '../components/Home';
import SignInContainer from '../components/SignIn';
import SignUpContainer from '../components/SignUp';
import UserContainer from '../components/User';
import UpdateUserContainer from '../components/UpdateUser';
import CreatePostContainer from '../components/CreatePost';
import UpdatePostContainer from '../components/UpdatePost';
import PostPageContainer from '../components/PostPage';
import NotFound from '../components/NotFound';
import RequireAuth from '../components/HOC';

export default (
  <BrowserRouter>
    <HeaderContainer />
    <ErrorsContainer />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/user/edit/:username" component={RequireAuth(UpdateUserContainer)} />
      <Route exact path="/user/:username" component={UserContainer} />
      <Route exact path="/post/:postId" component={PostPageContainer} />
      <Route exact path="/signin" component={SignInContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route exact path="/createpost" component={RequireAuth(CreatePostContainer)} />
      <Route exact path="/updatepost/:postId" component={RequireAuth(UpdatePostContainer)} />
      <Route path="/notfound" component={NotFound} />
      <Redirect from="*" to="/notfound" />
    </Switch>
    <Footer />
  </BrowserRouter>
);
