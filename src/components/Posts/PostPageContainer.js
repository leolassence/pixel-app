import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost } from '../../actionCreators';

import PostPage from './PostPage';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getPost
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
