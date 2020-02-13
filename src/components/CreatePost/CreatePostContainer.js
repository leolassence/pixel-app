import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost } from '../../actions';
import CreatePost from './CreatePost';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    createPost
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(CreatePost);
