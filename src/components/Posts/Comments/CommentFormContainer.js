import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createComment } from '../../../actions';
import CommentForm from './CommentForm';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    createComment
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
