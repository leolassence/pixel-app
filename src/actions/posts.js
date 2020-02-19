import { POST_ACTIONS } from '../constants';

export const getPostsRequest = (query, options) => ({
  type: POST_ACTIONS.GET_POSTS_REQUEST,
  payload: {
    query,
    options,
  },
});

export const getPostsSuccess = data => ({
  type: POST_ACTIONS.GET_POSTS_SUCCESS,
  payload: data,
});

export const getPostRequest = (postId, history) => ({
  type: POST_ACTIONS.GET_POST_REQUEST,
  payload: {
    postId,
    history,
  },
});

export const getPostSuccess = data => ({
  type: POST_ACTIONS.GET_POST_SUCCESS,
  payload: data,
});

export const createPostRequest = ({ formData, data }, history) => ({
  type: POST_ACTIONS.CREATE_POST_REQUEST,
  payload: { formData, data, history },
});

export const createPostSuccess = data => ({
  type: POST_ACTIONS.CREATE_POST_SUCCESS,
  payload: data,
});

export const updatePostRequest = ({ postId, formData, data }, history) => ({
  type: POST_ACTIONS.UPDATE_POST_REQUEST,
  payload: {
    postId,
    formData,
    data,
    history
  },
});

export const updatePostSuccess = data => ({
  type: POST_ACTIONS.UPDATE_POST_SUCCESS,
  payload: data,
});

export const deletePostRequest = (postId, history) => ({
  type: POST_ACTIONS.DELETE_POST_REQUEST,
  payload: {
    postId,
    history
  },
});

export const deletePostSuccess = data => ({
  type: POST_ACTIONS.DELETE_POST_SUCCESS,
  payload: data,
});

export const likePostRequest = postId => ({
  type: POST_ACTIONS.LIKE_POST_REQUEST,
  payload: {
    postId,
  },
});

export const likePostSuccess = data => ({
  type: POST_ACTIONS.LIKE_POST_SUCCESS,
  payload: data,
});
