import api from '../api';
import { COMMENT_ACTIONS } from '../constants';
import { parseError } from './errors';

function createComment({ message, postId }) {
  return async dispatch => {
    try {
      const { data: { updatedPost } } = await api.comments.createComment({
        postId,
        message,
      });

      if (!updatedPost) return dispatch(parseError('Internal server Error'));

      return dispatch({
        type: COMMENT_ACTIONS.CREATE_COMMENT,
        payload: updatedPost
      });
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

export default createComment;
