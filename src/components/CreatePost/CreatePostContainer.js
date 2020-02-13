import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost, getUser } from '../../actions';
import CreatePost from './CreatePost';

const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    createPost,
    getUser,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
