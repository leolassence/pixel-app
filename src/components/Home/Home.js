import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component {
  renderContentWhenLoggedIn() {
    if (this.props.isLoggedIn) {
      return (
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression.
          Le Lorem Ipsum est le faux texte standard de l$apos;imprimerie depuis les années 1500,
          quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser
          un livre spécimen de polices de texte.
        </p>
      );
    }

    return (
      <>
        <p>To view the following content you have to SignIn</p>
        <Link to="/signin" className="btn btn-lg btn-primary">Sign In</Link>
      </>
    );
  }

  render() {
    return (
      <main className="container" style={{ marginTop: '20px' }}>
        <div className="jumbotron">
          <h1>Home page</h1>
          {this.renderContentWhenLoggedIn()}
        </div>
      </main>
    );
  }
}

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Home;
