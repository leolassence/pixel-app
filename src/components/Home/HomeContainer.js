import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../actions';

import Home from './Home';

const mapStateToProps = state => ({
  postList: state.posts.postList
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getPosts,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
