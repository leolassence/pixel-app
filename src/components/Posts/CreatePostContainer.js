import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createPost } from '../../actionCreators';
import CreatePost from './CreatePost';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    createPost
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
