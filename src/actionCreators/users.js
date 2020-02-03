import axios from 'axios';

import { parseError } from './errors';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const USER_ACTIONS = {
  GET_USER: 'GET_USER'
};

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
