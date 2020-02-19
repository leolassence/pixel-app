import { USER_ACTIONS } from '../constants';

const initialState = {
  user: {}
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTIONS.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload
      };
    }
    case USER_ACTIONS.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload
      };
    }
    case USER_ACTIONS.FOLLOW_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
