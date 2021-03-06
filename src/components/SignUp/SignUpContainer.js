import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUpUserRequest } from '../../actions/authentification';
import SignUp from './SignUp';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    signUpUserRequest
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(SignUp);
