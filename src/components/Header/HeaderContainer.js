import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signOutUser } from '../../actions';
import Header from './Header';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    signOutUser
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
