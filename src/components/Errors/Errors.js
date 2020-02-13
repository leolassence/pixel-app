import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Errors extends Component {
  // TODO replace this hook
  UNSAFE_componentWillUpdate(nextProps) {
    const { location, resetError } = this.props;

    if (location.pathname !== nextProps.location.pathname) {
      resetError();
    }
  }

  render() {
    const { error } = this.props;
    return (
      error && (
        <div className="col-md-4 offset-4 alert alert-danger" role="alert">
          {error}
        </div>
      )
    );
  }
}

Errors.defaultProps = {
  location: {
    pathname: '/'
  },
  error: ''
};

Errors.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  resetError: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Errors;
