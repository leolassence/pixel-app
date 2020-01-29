import { connect } from 'react-redux';

import Home from './Home';

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

export default connect(mapStateToProps, null)(Home);
