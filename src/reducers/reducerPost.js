import {
  POST_ACTIONS,
  COMMENT_ACTIONS,
} from '../constants';

const initialState = {
  post: {},
  createdPost: {},
  updatedPost: {},
  postList: []
};

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ACTIONS.GET_POSTS: {
      return {
        ...state,
        postList: action.payload
      };
    }
    case POST_ACTIONS.GET_POST: {
      return {
        ...state,
        post: action.payload
      };
    }
    case POST_ACTIONS.CREATE_POST: {
      return {
        ...state,
        createdPost: action.payload
      };
    }
    case POST_ACTIONS.UPDATE_POST: {
      return {
        ...state,
        updatedPost: action.payload
      };
    }
    case POST_ACTIONS.DELETE_POST: {
      return {
        ...state,
        postList: state.postList.filter(
          post => post.postId === action.payload.deletedPostId ? null : true
        ),
      };
    }
    case COMMENT_ACTIONS.CREATE_COMMENT: {
      const { updatedPost } = action.payload;

      return {
        ...state,
        postList: state.postList.map(
          post => [updatedPost].find(i => post.postId === i.postId) || post
        ),
        post: state.post.postId === updatedPost.postId ? updatedPost : state.post,
      };
    }
    case POST_ACTIONS.LIKE_POST: {
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
