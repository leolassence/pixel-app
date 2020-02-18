import axios from 'axios';

const search = ({ query }) => axios({
  method: 'post',
  url: '/search',
  data: { searchQuery: query },
});

export default {
  search,
};
