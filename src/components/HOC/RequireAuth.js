import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (WrappedComponent) {
  class RequireAuthentification extends Component {
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth = () => {
      const { isLoggedIn, history } = this.props;

      if (!isLoggedIn) {
        history.push('/signin');
      }
    }

    render() {
      return this.props.isLoggedIn ? <WrappedComponent {...this.props} /> : null;
    }
  }

  RequireAuthentification.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  RequireAuthentification.displayName = `Authenticated(${wrappedComponentName})`;

  const mapStateToProps = state => ({
    isLoggedIn: state.authentification.isLoggedIn,
  });

  return connect(mapStateToProps, null)(RequireAuthentification);
}
