import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signInUser } from '../../actionCreators';
import SignIn from './SignIn';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    signInUser
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(SignIn);
