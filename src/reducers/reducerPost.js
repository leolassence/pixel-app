import {
  POST_ACTIONS,
  COMMENT_ACTIONS,
} from '../actions';

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
          post => post._id === action.payload.deletedPostId ? null : true
        ),
      };
    }
    case COMMENT_ACTIONS.CREATE_COMMENT: {
      const { updatedPost } = action.payload;

      return {
        ...state,
        postList: state.postList.map(post => [updatedPost].find(i => post._id === i._id) || post),
        post: state.post._id === updatedPost._id ? updatedPost : state.post,
      };
    }
    default: {
      return state;
    }
  }
}
