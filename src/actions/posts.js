import axios from 'axios';
import { POST_ACTIONS } from '../constants';
import { parseError } from './errors';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

function getPosts(query, options) {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${API_ENDPOINT}/posts`, {
        params: { query, options }
      });

      return dispatch({
        type: POST_ACTIONS.GET_POSTS,
        payload: data
      });
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function getPost(postId) {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${API_ENDPOINT}/posts/${postId}`);

      if (!data) return dispatch(parseError('Internal server Error'));

      return dispatch({
        type: POST_ACTIONS.GET_POST,
        payload: data
      });
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function createPost({ formData, data }, history) {
  return async dispatch => {
    try {
      const requestConfig = {
        method: 'post',
        headers: {
          authorization: localStorage.getItem('token')
        },
      };

      const { data: { imageId } } = await axios({
        ...requestConfig,
        url: `${API_ENDPOINT}/images`,
        data: formData,
      });

      if (!imageId) return dispatch(parseError('Internal server Error Image not created'));

      const { data: { postId } } = await axios({
        ...requestConfig,
        url: `${API_ENDPOINT}/posts`,
        data: {
          ...data,
          imageId
        }
      });

      if (!postId) return dispatch(parseError('Internal server Error'));

      dispatch({
        type: POST_ACTIONS.CREATE_POST,
        payload: postId
      });

      return history.push(`/post/${postId}`);
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function updatePost({ postId, formData, data }, history) {
  return async dispatch => {
    try {
      const requestConfig = {
        headers: {
          authorization: localStorage.getItem('token')
        },
      };

      const { data: { imageId } } = await axios({
        method: 'post',
        ...requestConfig,
        url: `${API_ENDPOINT}/images`,
        data: formData,
      });

      if (!imageId) return dispatch(parseError('Internal server Error Image not created'));

      const { data: { postId: updatedPostId } } = await axios({
        method: 'put',
        ...requestConfig,
        url: `${API_ENDPOINT}/posts/${postId}`,
        data: {
          ...data,
          imageId
        }
      });

      if (!updatedPostId) return dispatch(parseError('Internal server Error'));

      dispatch({
        type: POST_ACTIONS.UPDATE_POST,
        payload: updatedPostId
      });

      return history.push(`/post/${updatedPostId}`);
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function deletePost(postId, history) {
  return async dispatch => {
    try {
      const { data } = await axios({
        method: 'delete',
        headers: {
          authorization: localStorage.getItem('token')
        },
        url: `${API_ENDPOINT}/posts/${postId}`
      });

      if (!data) return dispatch(parseError('Internal server Error'));

      dispatch({
        type: POST_ACTIONS.DELETE_POST,
        payload: data
      });

      return history.push('/');
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

export {
  createPost,
  updatePost,
  getPost,
  getPosts,
  deletePost
};
