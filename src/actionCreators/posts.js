import axios from 'axios';

import { parseError } from './errors';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const POST_ACTIONS = {
  CREATE_POST: 'CREATE_POST'
};

function createPost(post) {
  return async dispatch => {
    try {
      const response = await axios({
        method: 'post',
        url: `${API_ENDPOINT}/post/create`,
        data: post,
        headers: {
          authorization: localStorage.getItem('token')
        }
      });

      return dispatch({
        type: POST_ACTIONS.CREATE_POST,
        payload: response.data
      });
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

export {
  POST_ACTIONS,
  createPost
};
