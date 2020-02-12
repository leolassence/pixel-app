import {
  setAuthentification,
  signInUser,
  signUpUser,
  signOutUser
} from './authentification';

import {
  getUser,
  updateUser,
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
} from './posts';

import createComment from './comments';

export {
  parseError,
  resetError,
  setAuthentification,
  signInUser,
  signUpUser,
  signOutUser,
  getUser,
  createPost,
  updatePost,
  getPost,
  updateUser,
  getPosts,
  deletePost,
  createComment,
};
