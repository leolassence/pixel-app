import { POST_ACTIONS } from '../actionCreators';

const initialState = {
  post: {},
  createdPost: {}
};

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
}
