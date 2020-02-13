import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createComment } from '../../actions';
import CommentForm from './CommentForm';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    createComment
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(CommentForm);
