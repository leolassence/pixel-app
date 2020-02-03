import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => {
  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <main className="container" style={{ marginTop: '20px' }}>
      <div className="jumbotron post">
        <span>{post.username}</span>
        <h1>{post.title}</h1>
        <p>{post.location}</p>
        <p>{post.description}</p>
        <img src={post.coverImage} alt={post.title} />
      </div>
    </main>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    coverImage: PropTypes.string,
  }).isRequired,
};

export default Post;
