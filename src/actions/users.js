import axios from 'axios';
import { USER_ACTIONS } from '../constants';
import { parseError } from './errors';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

function getUser({ username }) {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/users`, {
        params: { username }
      });

      return dispatch({
        type: USER_ACTIONS.GET_USER,
        payload: response.data
      });
    } catch (error) {
      if (!error.response) return dispatch(parseError('Server not responding'));
      return dispatch(parseError(error.response.data.message));
    }
  };
}

export {
  USER_ACTIONS,
  getUser
};
