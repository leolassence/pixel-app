import api from '../api';
import { POST_ACTIONS } from '../constants';
import { parseError } from './errors';

function getPosts(query, options) {
  return async dispatch => {
    try {
      const { data } = await api.posts.getPosts({ query, options });

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

function getPost(postId, history) {
  return async dispatch => {
    try {
      const { data } = await api.posts.getPost({ postId });

      if (!data) return dispatch(parseError('Internal server Error'));

      return dispatch({
        type: POST_ACTIONS.GET_POST,
        payload: data
      });
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      dispatch(parseError(error.response.data.message));
      return history.push('/notfound');
    }
  };
}

function createPost({ formData, data }, history) {
  return async dispatch => {
    try {
      const { data: { imageId } } = await api.images.createImage({ formData });

      if (!imageId) return dispatch(parseError('Internal server Error Image not created'));

      const { data: { createdPost } } = await api.posts.createPost({ data, imageId });

      if (!createdPost) return dispatch(parseError('Internal server Error'));

      dispatch({
        type: POST_ACTIONS.CREATE_POST,
        payload: createdPost
      });

      return history.push(`/post/${createdPost.postId}`);
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function updatePost({ postId, formData, data }, history) {
  return async dispatch => {
    try {
      const { data: { imageId } } = await api.images.createImage({ formData });

      if (!imageId) return dispatch(parseError('Internal server Error Image not created'));

      const { data: { updatedPost } } = await api.posts.updatePost({
        data,
        imageId,
        postId
      });

      if (!updatedPost) return dispatch(parseError('Internal server Error'));

      dispatch({
        type: POST_ACTIONS.UPDATE_POST,
        payload: updatedPost
      });

      return history.push(`/post/${updatedPost.postId}`);
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function deletePost(postId, history) {
  return async dispatch => {
    try {
      const { data: { deletedPostId } } = await api.posts.deletePost({ postId });

      if (!deletedPostId) return dispatch(parseError('Internal server Error'));

      dispatch({
        type: POST_ACTIONS.DELETE_POST,
        payload: deletedPostId
      });

      return history.push('/');
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

function likePost(postId) {
  return async dispatch => {
    try {
      const { data: { likedPost } } = await api.posts.likePost({ postId });

      if (!likedPost) return dispatch(parseError('Internal server Error'));

      return dispatch({
        type: POST_ACTIONS.LIKE_POST,
        payload: likedPost
      });
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
  deletePost,
  likePost,
};
