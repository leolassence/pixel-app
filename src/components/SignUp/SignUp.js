import React, { Component } from 'react';
import { Form } from 'react-final-form';
import PropTypes from 'prop-types';
import FormField from '../FormField';

import {
  required,
  minValue,
  composeValidators,
  isEmail,
  validatePassword,
  validateUsername
} from '../../assets/helpers/formvalidation';


class SignUp extends Component {
  handleSubmit = ({ email, username, password }) => this.props.signUpUser({
    email,
    username,
    password
  }, this.props.history);

  render() {
    return (
      <div className="text-center signin-page">
        <Form
          onSubmit={this.handleSubmit}
          validate={validatePassword}
          render={({
            handleSubmit,
            form,
            pristine,
          }) => (
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
              <FormField
                name="email"
                type="email"
                placeholder="Email"
                component="input"
                validator={composeValidators(required, isEmail)}
              />
              <FormField
                name="username"
                type="input"
                placeholder="Username"
                component="input"
                validator={composeValidators(required, minValue(3), validateUsername)}
              />
              <FormField
                name="password"
                type="password"
                placeholder="Password"
                component="input"
                validator={composeValidators(required, minValue(8))}
              />
              <FormField
                name="repeatPassword"
                type="password"
                placeholder="Repeat Password"
                component="input"
                validator={composeValidators(required, minValue(8))}
              />
              <div className="buttons">
                <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={pristine}>
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

SignUp.propTypes = {
  history: PropTypes.shape({}),
  signUpUser: PropTypes.func.isRequired
};

SignUp.defaultProps = {
  history: {}
};

export default SignUp;
