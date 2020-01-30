import React, { Component } from 'react';
import { Form } from 'react-final-form';
import PropTypes from 'prop-types';
import FormField from '../FormField';

import {
  required,
  minValue,
  composeValidators
} from '../../assets/helpers/formvalidation';


class SignIn extends Component {
  handleSubmit = ({ signInId, password }) => this.props.signInUser({
    signInId,
    password,
  },
  this.props.history);

  render() {
    return (
      <div className="text-center signin-page">
        <Form
          onSubmit={this.handleSubmit}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine
          }) => (
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
              <FormField
                name="signInId"
                type="input"
                placeholder="Email or Username"
                component="input"
                validator={composeValidators(required)}
              />
              <FormField
                name="password"
                type="password"
                placeholder="Password"
                component="input"
                validator={composeValidators(required, minValue(8))}
              />
              <div className="buttons">
                <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.shape({}),
  signInUser: PropTypes.func.isRequired
};

SignIn.defaultProps = {
  history: {}
};

export default SignIn;
