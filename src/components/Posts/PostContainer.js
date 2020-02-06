import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from './Post';
import { deletePost } from '../../actions';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    deletePost
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
