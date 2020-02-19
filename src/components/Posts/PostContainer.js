import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from './Post';
import { deletePostRequest, likePostRequest } from '../../actions/posts';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    deletePostRequest,
    likePostRequest,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
