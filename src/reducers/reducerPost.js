import { POST_ACTIONS } from '../actions';

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
    default: {
      return state;
    }
  }
}
