import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

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
              <div className="field">
                <Field name="signInId" validate={composeValidators(required)}>
                  {({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        type="signInId"
                        component="input"
                        placeholder="Email or Username"
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
