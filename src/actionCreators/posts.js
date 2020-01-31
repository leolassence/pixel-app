import axios from 'axios';

import { parseError } from './errors';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const POST_ACTIONS = {
  GET_POST: 'GET_POST',
  CREATE_POST: 'CREATE_POST'
};

function getPost(postId) {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${API_ENDPOINT}/post/get`, {
        params: { postId }
      });

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

function createPost(post, history) {
  return async dispatch => {
    try {
      const { data: { postId } } = await axios({
        method: 'post',
        url: `${API_ENDPOINT}/post/create`,
        data: post,
        headers: {
          authorization: localStorage.getItem('token')
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

export {
  POST_ACTIONS,
  createPost,
  getPost
};
