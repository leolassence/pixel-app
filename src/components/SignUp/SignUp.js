import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

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
              <div className="field">
                <Field name="email" validate={composeValidators(required, isEmail)}>
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="email"
                        component="input"
                        placeholder="Email"
                        className="form-control"
                      />
                      <div className="form-errors">
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    </div>
                  )}
                </Field>
              </div>
              <div className="field">
                <Field name="username" validate={composeValidators(required, minValue(3), validateUsername)}>
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="username"
                        component="input"
                        placeholder="Username"
                        className="form-control"
                      />
                      <div className="form-errors">
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    </div>
                  )}
                </Field>
              </div>
              <div className="field">
                <Field name="password" validate={composeValidators(required, minValue(8))}>
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="password"
                        component="input"
                        placeholder="Password"
                        className="form-control"
                      />
                      <div className="form-errors">
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    </div>
                  )}
                </Field>
              </div>
              <div className="field">
                <Field name="repeatPassword" validate={composeValidators(required, minValue(8))}>
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="password"
                        component="input"
                        placeholder="Repeat Password"
                        className="form-control"
                      />
                      <div className="form-errors">
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    </div>
                  )}
                </Field>
              </div>
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
