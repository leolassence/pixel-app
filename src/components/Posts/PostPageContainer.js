import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost } from '../../actions';

import PostPage from './PostPage';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn,
  post: state.posts.post
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getPost
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
