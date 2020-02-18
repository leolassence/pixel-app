import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserRequest } from '../../actions/users';
import { createPostRequest } from '../../actions/posts';
import CreatePost from './CreatePost';

const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    createPostRequest,
    getUserRequest,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
