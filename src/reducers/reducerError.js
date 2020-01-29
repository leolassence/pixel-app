import { ERROR_ACTIONS } from '../actionCreators';

const initialState = {
  message: ''
};

export default function ErrorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR_ACTIONS.PARSE_ERROR: {
      return {
        message: action.payload
      };
    }
    case ERROR_ACTIONS.RESET_ERROR: {
      return {
        message: ''
      };
    }
    default: {
      return state;
    }
  }
}
