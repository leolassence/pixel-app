import axios from 'axios';

const getUser = ({ username }) => axios.get('/users', {
  params: { username }
});

const updateUser = ({ userId, imageId, data }) => axios({
  method: 'put',
  headers: {
    authorization: localStorage.getItem('token')
  },
  url: `/users/${userId}`,
  data: {
    ...data,
    imageId
  }
});

const followUser = ({ userId }) => axios({
  method: 'put',
  headers: {
    authorization: localStorage.getItem('token')
  },
  url: `/users/follow/${userId}`
});


export default {
  getUser,
  updateUser,
  followUser,
};
