import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <main className="container" style={{ marginTop: '20px' }}>
    <div className="jumbotron">
      <h1>Page Not Found</h1>
      <Link to="/" className="btn btn-lg btn-primary">Home</Link>
    </div>
  </main>
);
