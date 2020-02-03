import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signUpUser } from '../../actions';
import SignUp from './SignUp';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    signUpUser
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(SignUp);
