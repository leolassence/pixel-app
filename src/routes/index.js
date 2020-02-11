import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import '../assets/css/style.css';
import 'font-awesome/css/font-awesome.min.css';
import HomeContainer from '../components/Home';
import HeaderContainer from '../components/Header';
import Footer from '../components/Footer';
import SignInContainer from '../components/SignIn';
import SignUpContainer from '../components/SignUp';
import ErrorsContainer from '../components/Errors';
import { UserContainer, EditProfileContainer } from '../components/User';
import NotFound from '../components/NotFound';
import CreatePostContainer from '../components/CreatePost';
import UpdatePostContainer from '../components/UpdatePost';
import PostPageContainer from '../components/PostPage';

export default (
  <BrowserRouter>
    <HeaderContainer />
    <ErrorsContainer />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/user/edit/:username" component={EditProfileContainer} />
      <Route exact path="/user/:username" component={UserContainer} />
      <Route exact path="/post/:postId" component={PostPageContainer} />
      <Route exact path="/signin" component={SignInContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route exact path="/createpost" component={CreatePostContainer} />
      <Route exact path="/updatepost/:postId" component={UpdatePostContainer} />
      <Route path="/notfound" component={NotFound} />
      <Redirect from="*" to="/notfound" />
    </Switch>
    <Footer />
  </BrowserRouter>
);
