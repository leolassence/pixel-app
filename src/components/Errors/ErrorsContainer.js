import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import { parseError, resetError } from '../../actions';
import Errors from './Errors';

const mapStateToProps = state => ({
  error: state.errors.message
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    parseError,
    resetError
  }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Errors));
