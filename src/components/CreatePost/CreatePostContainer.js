import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost, getUserRequest } from '../../actions';
import CreatePost from './CreatePost';

const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    createPost,
    getUserRequest,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
