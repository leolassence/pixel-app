import { POST_ACTIONS } from '../actionCreators';

const initialState = {};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ACTIONS.CREATE_POST: {
      return {
        post: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
