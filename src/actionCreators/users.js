import axios from 'axios';

import { parseError } from './errors';

const API_ENDPOINT = 'http://localhost:8080';
const USER_ACTIONS = {
  GET_USER: 'GET_USER'
};

function getUser({ username }) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${API_ENDPOINT}/user`, {
        params: { username }
      });

      dispatch({
        type: USER_ACTIONS.GET_USER,
        payload: response.data
      });
    } catch (error) {
      dispatch(parseError(error.response.data.message));
    }
  };
}

export {
  USER_ACTIONS,
  getUser
};
