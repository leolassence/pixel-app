import axios from 'axios';

const getPosts = ({ query, options }) => axios.get('/posts', {
  params: { query, options }
});

const getPost = ({ postId }) => axios.get(`/posts/${postId}`);

const createPost = ({ data, imageId }) => axios({
  method: 'post',
  headers: {
    authorization: localStorage.getItem('token')
  },
  url: '/posts',
  data: {
    ...data,
    imageId
  }
});

const updatePost = ({ data, imageId, postId }) => axios({
  method: 'put',
  headers: {
    authorization: localStorage.getItem('token')
  },
  url: `/posts/${postId}`,
  data: {
    ...data,
    imageId
  }
});

const deletePost = ({ postId }) => axios({
  method: 'delete',
  headers: {
    authorization: localStorage.getItem('token')
  },
  url: `/posts/${postId}`
});

const likePost = ({ postId }) => axios({
  method: 'put',
  headers: {
    authorization: localStorage.getItem('token')
  },
  url: `/posts/like/${postId}`
});

export default {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
};
