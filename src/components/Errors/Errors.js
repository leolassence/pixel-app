import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Errors extends Component {
  UNSAFE_componentWillUpdate(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.resetError();
    }
  }

  render() {
    return (
      this.props.error && (
        <div className="alert alert-danger" role="alert">
          {this.props.error}
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
