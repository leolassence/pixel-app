import axios from 'axios';

const signin = ({ signInId, password }) => axios.post('/auth/signIn', {
  signInId,
  password
});

const signup = ({ email, username, password }) => axios.post('/auth/signUp', {
  email,
  username,
  password,
});

export default {
  signin,
  signup,
};
