import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser, updateUser } from '../../actions';

import UpdateUser from './UpdateUser';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn,
  user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getUser,
    updateUser,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
