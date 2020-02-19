import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostRequest } from '../../actions/posts';
import PostPage from './PostPage';

const mapStateToProps = state => ({
  post: state.posts.post
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getPostRequest
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
