import { ERROR_ACTIONS } from '../constants';

export const parseError = ({ error }) => ({
  type: ERROR_ACTIONS.PARSE_ERROR,
  payload: {
    error
  }
});

export const resetError = () => ({
  type: ERROR_ACTIONS.RESET_ERROR,
});
