import { ERROR_ACTIONS } from '../constants';

function parseError(errorMessage) {
  return {
    type: ERROR_ACTIONS.PARSE_ERROR,
    payload: errorMessage
  };
}

function resetError() {
  return {
    type: ERROR_ACTIONS.RESET_ERROR
  };
}

export {
  ERROR_ACTIONS,
  parseError,
  resetError
};
