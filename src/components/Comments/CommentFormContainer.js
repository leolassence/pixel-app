import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createCommentRequest } from '../../actions/comments';
import CommentForm from './CommentForm';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    createCommentRequest
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(CommentForm);
