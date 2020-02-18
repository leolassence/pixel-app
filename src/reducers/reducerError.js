import { ERROR_ACTIONS } from '../constants';

const initialState = {
  message: ''
};

export default function ErrorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR_ACTIONS.PARSE_ERROR: {
      return {
        ...state,
        message: action.payload.error
      };
    }
    case ERROR_ACTIONS.RESET_ERROR: {
      return {
        ...state,
        message: ''
      };
    }
    default: {
      return state;
    }
  }
}
