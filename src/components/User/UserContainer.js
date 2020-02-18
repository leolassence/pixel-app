import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserRequest, getPosts, followUserRequest } from '../../actions';

import User from './User';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn,
  user: state.users.user,
  postList: state.posts.postList,
  postListHasResults: Boolean(state.posts.postList.length)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getUserRequest,
    getPosts,
    followUserRequest,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
