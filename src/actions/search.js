import axios from 'axios';
import { SEARCH_ACTIONS } from '../constants';
import { parseError } from './errors';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

function search(query) {
  return async dispatch => {
    try {
      const { data } = await axios({
        method: 'post',
        url: `${API_ENDPOINT}/search`,
        data: { searchQuery: query },
      });

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
