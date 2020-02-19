import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';
import phone from '../../assets/images/phone.png';
import logo from '../../assets/images/logo.png';

class SignIn extends Component {
  handleSubmit = ({ signInId, password }) => this.props.signInUserRequest({
    signInId,
    password,
  },
  this.props.history);

  render() {
    return (
      <main className="login">
        <div className="login__column">
          <img
            src={phone}
            alt="Phone"
            title="Phone"
            className="login__phone-image"
          />
        </div>
        <section className="login__column">
          <div className="login__section login__sign-in">
            <img
              src={logo}
              alt="Logo"
              title="Logo"
              className="login__logo"
            />
            <br />
            <Form schema={schema} onSubmit={this.handleSubmit} className="login__form">
              <div className="login__input-container">
                <Input
                  name="signInId"
                  type="text"
                  placeholder="Email or Username"
                  className="login__input"
                />
              </div>
              <div className="login__input-container">
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="login__input"
                />
              </div>
              <div className="login__input-container">
                <input
                  type="submit"
                  value="Log in"
                  className="login__input login__input--btn"
                />
              </div>
            </Form>
            <br />
          </div>
          <div className="login__section login__sign-up">
            <span className="login__text">
              Don&apos;t have an account ?&nbsp;
              <Link to="/signup" className="login__link">
                Sign up
              </Link>
            </span>
          </div>
        </section>
      </main>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.shape({}),
  signInUserRequest: PropTypes.func.isRequired
};

SignIn.defaultProps = {
  history: {}
};

export default SignIn;
