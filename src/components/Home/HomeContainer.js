import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostsRequest } from '../../actions/posts';

import Home from './Home';

const mapStateToProps = state => ({
  postList: state.posts.postList
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getPostsRequest,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
