import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost, updatePost } from '../../actions';
import UpdatePost from './UpdatePost';

const mapStateToProps = state => ({
  post: state.posts.post,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getPost,
    updatePost,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
