import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserRequest, updateUserRequest } from '../../actions/users';
import UpdateUser from './UpdateUser';

const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getUserRequest,
    updateUserRequest,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
