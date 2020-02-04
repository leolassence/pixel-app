import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { isCurrentUserPost } from '../../helpers';

class Post extends Component {
  handleClickDeletePost = () => this.props.deletePost(this.props.post._id);

  renderCurrentUserActions = () => {
    const { post } = this.props;

    if (isCurrentUserPost(this.props)) {
      const windowMessage = 'Are you sure you wish to delete this post ?';

      return (
        <div className="card-body">
          <Link to={`/updatepost/${post._id}`} type="button" className="btn btn-primary">Edit</Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => { if (window.confirm(windowMessage)) this.handleClickDeletePost(); }}
          >
            Delete
          </button>
        </div>
      );
    }

    return null;
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <p>Loading...</p>;
    }

    return (
      <div className="post card col-md-6 offset-3">
        <Link to={`/post/${post._id}`}>
          <img src={post.coverImage} className="card-img-top" alt={post.title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to={`/user/${post.username}`}>{post.username}</Link>
          </li>
          <li className="list-group-item">{post.location}</li>
        </ul>
        {this.renderCurrentUserActions()}
      </div>
    );
  }
}

Post.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  post: PropTypes.shape({
    _id: PropTypes.string,
    username: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    coverImage: PropTypes.string,
  }).isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Post;
