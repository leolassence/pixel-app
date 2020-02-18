import {
  POST_ACTIONS,
  COMMENT_ACTIONS,
} from '../constants';

const initialState = {
  post: {},
  postList: []
};

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ACTIONS.GET_POSTS_SUCCESS: {
      return {
        ...state,
        postList: action.payload
      };
    }
    case POST_ACTIONS.GET_POST_SUCCESS: {
      const newPost = action.payload;

      return {
        ...state,
        post: newPost,
        postList: state.postList.map(
          post => [newPost].find(i => post.postId === i.postId) || post
        ),
      };
    }
    case POST_ACTIONS.CREATE_POST_SUCCESS: {
      const createdPost = action.payload;

      return {
        ...state,
        post: action.payload,
        postList: [
          ...state.postList,
          createdPost,
        ],
      };
    }
    case POST_ACTIONS.UPDATE_POST_SUCCESS: {
      const updatedPost = action.payload;

      return {
        ...state,
        post: updatedPost,
        postList: state.postList.map(
          post => [updatedPost].find(i => post.postId === i.postId) || post
        ),
      };
    }
    case POST_ACTIONS.DELETE_POST_SUCCESS: {
      const deletedPostId = action.payload;

      return {
        ...state,
        postList: state.postList.filter(
          post => post.postId === deletedPostId ? null : true
        ),
        post: state.post.postId === deletedPostId ? {} : state.post,
      };
    }
    case COMMENT_ACTIONS.CREATE_COMMENT_SUCCESS: {
      const updatedPost = action.payload;

      return {
        ...state,
        postList: state.postList.map(
          post => [updatedPost].find(i => post.postId === i.postId) || post
        ),
        post: state.post.postId === updatedPost.postId ? updatedPost : state.post,
      };
    }
    case POST_ACTIONS.LIKE_POST_SUCCESS: {
      const likedPost = action.payload;

      return {
        ...state,
        postList: state.postList.map(
          post => [likedPost].find(i => post.postId === i.postId) || post
        ),
        post: state.post.postId === likedPost.postId ? likedPost : state.post,
      };
    }
    default: {
      return state;
    }
  }
}
