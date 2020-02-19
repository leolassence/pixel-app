import { COMMENT_ACTIONS } from '../constants';

export const createCommentRequest = ({ message, postId }) => ({
  type: COMMENT_ACTIONS.CREATE_COMMENT_REQUEST,
  payload: { message, postId }
});

export const createCommentSuccess = updatedPost => ({
  type: COMMENT_ACTIONS.CREATE_COMMENT_SUCCESS,
  payload: updatedPost
});
