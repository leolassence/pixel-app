import api from '../api';
import { SEARCH_ACTIONS } from '../constants';
import { parseError } from './errors';

function search(query) {
  return async dispatch => {
    try {
      const { data } = await api.search.search({ query });

      return dispatch({
        type: SEARCH_ACTIONS.SEARCH,
        payload: data
      });
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

export default search;
