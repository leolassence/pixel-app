import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signInUserRequest } from '../../actions';
import SignIn from './SignIn';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    signInUserRequest
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(SignIn);
