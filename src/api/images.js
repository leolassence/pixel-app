import axios from 'axios';

const createImage = ({ formData }) => axios({
  method: 'post',
  headers: {
    authorization: localStorage.getItem('token')
  },
  url: '/images',
  data: formData,
});

export default {
  createImage
};
