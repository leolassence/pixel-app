import {
  AUTH_ACTIONS,
  setAuthentification,
  signInUser,
  signUpUser,
  signOutUser
} from './authentification';

import {
  USER_ACTIONS,
  getUser,
} from './users';

import {
  ERROR_ACTIONS,
  parseError,
  resetError
} from './errors';

import {
  POST_ACTIONS,
  createPost
} from './posts';

export {
  ERROR_ACTIONS,
  parseError,
  resetError,
  AUTH_ACTIONS,
  setAuthentification,
  signInUser,
  signUpUser,
  signOutUser,
  USER_ACTIONS,
  getUser,
  POST_ACTIONS,
  createPost
};
