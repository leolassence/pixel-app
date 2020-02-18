import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { signOutUserRequest, searchRequest } from '../../actions';
import Header from './Header';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    signOutUserRequest,
    searchRequest,
  }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
