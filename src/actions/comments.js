import axios from 'axios';

import { parseError } from './errors';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const COMMENT_ACTIONS = {
  CREATE_COMMENT: 'CREATE_COMMENT',
};

function createComment({ message, postId }) {
  return async dispatch => {
    try {
      const { data } = await axios({
        method: 'post',
        headers: {
          authorization: localStorage.getItem('token')
        },
        url: `${API_ENDPOINT}/posts/comment/${postId}`,
        data: { message }
      });

      if (!data.updatedPost) return dispatch(parseError('Internal server Error'));

      return dispatch({
        type: COMMENT_ACTIONS.CREATE_COMMENT,
        payload: data
      });
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

export {
  COMMENT_ACTIONS,
  createComment,
};
