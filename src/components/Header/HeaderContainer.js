import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { signOutUser, search } from '../../actions';
import Header from './Header';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    signOutUser,
    search,
  }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
