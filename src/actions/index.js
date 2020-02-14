import {
  setAuthentification,
  signInUser,
  signUpUser,
  signOutUser
} from './authentification';

import {
  getUser,
  updateUser,
  followUser,
} from './users';

import {
  parseError,
  resetError
} from './errors';

import {
  createPost,
  getPost,
  getPosts,
  deletePost,
  updatePost,
  likePost,
} from './posts';

import createComment from './comments';
import search from './search';

export {
  search,
  parseError,
  resetError,
  setAuthentification,
  signInUser,
  signUpUser,
  signOutUser,
  getUser,
  createPost,
  updatePost,
  likePost,
  getPost,
  updateUser,
  followUser,
  getPosts,
  deletePost,
  createComment,
};
