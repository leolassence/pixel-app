import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, getPosts, followUser } from '../../actions';

import User from './User';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn,
  user: state.users.user,
  postList: state.posts.postList
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getUser,
    getPosts,
    followUser,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
