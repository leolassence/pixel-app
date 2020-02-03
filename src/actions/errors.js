const ERROR_ACTIONS = {
  PARSE_ERROR: 'PARSE_ERROR',
  RESET_ERROR: 'RESET_ERROR',
};

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
