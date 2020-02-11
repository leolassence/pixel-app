import { USER_ACTIONS } from '../constants';

const initialState = {
  user: {}
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTIONS.GET_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    case USER_ACTIONS.UPDATE_USER: {
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
