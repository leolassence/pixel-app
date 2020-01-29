import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setAuthentification, signOutUser } from '../../actionCreators';
import Header from './Header';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    setAuthentification,
    signOutUser
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
