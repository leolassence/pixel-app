import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser } from '../../actionCreators';
import User from './User';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn,
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getUser
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
