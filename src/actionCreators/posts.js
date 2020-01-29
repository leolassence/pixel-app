import axios from 'axios';

import { parseError } from './errors';

const API_ENDPOINT = 'http://localhost:8080';
const POST_ACTIONS = {
  CREATE_POST: 'CREATE_POST'
};

function createPost(post) {
  return async function (dispatch) {
    try {
      const response = await axios({
        method: 'post',
        url: `${API_ENDPOINT}/post/create`,
        data: post,
        headers: {
          authorization: localStorage.getItem('token')
        }
      });

      dispatch({
        type: POST_ACTIONS.CREATE_POST,
        payload: response.data
      });
    } catch (error) {
      dispatch(parseError(error.response.data.message));
    }
  };
}

export {
  POST_ACTIONS,
  createPost
};
