import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';


class SignIn extends Component {
  handleSubmit = ({ signInId, password }) => this.props.signInUser({
    signInId,
    password,
  },
  this.props.history);

  render() {
    return (
      <div className="text-center signin-page">
        <Form schema={schema} onSubmit={this.handleSubmit} className="form">
          <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
          <div className="field">
            <Input
              name="signInId"
              type="text"
              placeholder="Email or Username"
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

SignIn.propTypes = {
  history: PropTypes.shape({}),
  signInUser: PropTypes.func.isRequired
};

SignIn.defaultProps = {
  history: {}
};

export default SignIn;
