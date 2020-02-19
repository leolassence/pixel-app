import axios from 'axios';

const createComment = ({ postId, message }) => axios({
  method: 'post',
  headers: {
    authorization: localStorage.getItem('token')
  },
  url: `/posts/comment/${postId}`,
  data: { message }
});

export default {
  createComment,
};
