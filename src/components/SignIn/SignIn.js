import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';


class SignIn extends Component {
  handleSubmit = credentials => this.props.signInUser(
    credentials,
    this.props.history
  );

  validate = values => {
    const errors = {};
    if (!values.email) errors.email = 'Required';
    if (!values.password) errors.password = 'Required';

    return errors;
  }

  render() {
    return (
      <div className="text-center signin-page">
        <Form
          onSubmit={this.handleSubmit}
          validate={this.validate}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine
          }) => (
            <form className="form-signin" onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="email"
                      component="input"
                      placeholder="Email"
                      className="form-control"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="password"
                      component="input"
                      placeholder="Password"
                      className="form-control"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
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
