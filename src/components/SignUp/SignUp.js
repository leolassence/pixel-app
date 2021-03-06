import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import schema from './schema';
import phone from '../../assets/images/phone.png';
import logo from '../../assets/images/logo.png';

class SignUp extends Component {
  handleSubmit = ({ email, username, password }) => this.props.signUpUserRequest({
    email,
    username,
    password,
    history: this.props.history
  });

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
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="login__input"
                />
              </div>
              <div className="login__input-container">
                <Input
                  name="username"
                  type="text"
                  placeholder="Username"
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
                <Input
                  name="repeatPassword"
                  type="password"
                  placeholder="Repeat Password"
                  className="login__input"
                />
              </div>
              <div className="login__input-container">
                <input
                  type="submit"
                  value="Sign up"
                  className="login__input login__input--btn"
                />
              </div>
            </Form>
            <br />
          </div>
          <div className="login__section login__sign-up">
            <span className="login__text">
              Already have an account ?&nbsp;
              <Link to="/signin" className="login__link">
                Sign In
              </Link>
            </span>
          </div>
        </section>
      </main>
    );
  }
}

SignUp.propTypes = {
  history: PropTypes.shape({}),
  signUpUserRequest: PropTypes.func.isRequired
};

SignUp.defaultProps = {
  history: {}
};

export default SignUp;
