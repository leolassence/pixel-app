import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';


class SignUp extends Component {
  handleSubmit = ({ email, username, password }) => this.props.signUpUser({
    email,
    username,
    password
  }, this.props.history);

  render() {
    return (
      <div className="text-center signin-page">
        <Form schema={schema} onSubmit={this.handleSubmit} className="form">
          <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
          <div className="field">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="field">
            <Input
              name="username"
              type="text"
              placeholder="Username"
              className="form-control"
            />
          </div>
          <div className="field">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="field">
            <Input
              name="repeatPassword"
              type="password"
              placeholder="Repeat Password"
              className="form-control"
            />
          </div>
          <div className="buttons">
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Submit
            </button>
          </div>
        </Form>
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
