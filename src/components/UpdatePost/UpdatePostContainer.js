import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostRequest, updatePostRequest } from '../../actions/posts';
import UpdatePost from './UpdatePost';

const mapStateToProps = state => ({
  post: state.posts.post,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getPostRequest,
    updatePostRequest,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
