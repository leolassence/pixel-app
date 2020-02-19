import { SEARCH_ACTIONS } from '../constants';

export const searchRequest = query => ({
  type: SEARCH_ACTIONS.SEARCH_REQUEST,
  payload: { query }
});

export const searchSuccess = data => ({
  type: SEARCH_ACTIONS.SEARCH_SUCCESS,
  payload: data
});
