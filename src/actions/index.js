import {
  setAuthentification,
  signInUserRequest,
  signUpUserRequest,
  signOutUserRequest,
} from './authentification';

import {
  getUserRequest,
  updateUserRequest,
  followUserRequest,
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

import {
  createCommentRequest,
  createCommentSuccess,
} from './comments';

import {
  searchRequest,
  searchSuccess,
} from './search';

export {
  getUserRequest,
  signOutUserRequest,
  createCommentRequest,
  createCommentSuccess,
  searchRequest,
  searchSuccess,
  parseError,
  resetError,
  setAuthentification,
  signInUserRequest,
  signUpUserRequest,
  createPost,
  updatePost,
  likePost,
  getPost,
  updateUserRequest,
  followUserRequest,
  getPosts,
  deletePost,
};
