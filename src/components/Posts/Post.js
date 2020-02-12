import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { isCurrentUserPost } from '../../helpers';
import { CommentFormContainer, Comment } from '../Comments';

class Post extends Component {
  handleClickDeletePost = () => this.props.deletePost(this.props.post._id, this.props.history);

  renderCurrentUserActions = () => {
    const { post, isLoggedIn } = this.props;

    if (isLoggedIn && isCurrentUserPost(this.props)) {
      const windowMessage = 'Are you sure you wish to delete this post ?';

      return (
        <Fragment>
          <Link to={`/updatepost/${post._id}`}>
            <span className="photo__icon">
              <i className="fa fa-edit" />
              &nbsp;
            </span>
          </Link>
          <a href="#" onClick={() => { if (window.confirm(windowMessage)) this.handleClickDeletePost(); }}>
            <span className="photo__icon">
              <i className="fa fa-trash" />
              &nbsp;
            </span>
          </a>
        </Fragment>
      );
    }

    return null;
  }

  renderCommentForm = () => {
    if (this.props.isLoggedIn) {
      return <CommentFormContainer postId={this.props.post._id} />;
    }

    return null;
  }

  renderComments = () => {
    const { post } = this.props;
    return post.comments.map(c => (
      <Comment
        key={Math.random().toString(36).substr(2, 9)}
        username={c.username}
        message={c.message}
      />
    ));
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <p>Loading...</p>;
    }

    return (
      <section className="photo">
        <header className="photo__header">
          <div className="photo__header-column">
            <Link to={`/user/${post.user.username}`}>
              <img
                className="photo__avatar"
                src={post.user.profileImage}
                alt={post.user.username}
              />
            </Link>
          </div>
          <div className="photo__header-column">
            <Link to={`/user/${post.user.username}`}>
              <span className="photo__username">{post.user.username}</span>
            </Link>
            <span className="photo__location">{post.location}</span>
          </div>
        </header>

        <div className="photo__file-container">
          <Link to={`/post/${post._id}`}>
            <img className="photo__file" src={post.coverImage} alt={post.title} />
          </Link>
        </div>
        <div className="photo__info">
          <div className="photo__icons">
            <span className="photo__icon">
              <i className="fa fa-heart heart" />
              &nbsp;
            </span>
            {this.renderCurrentUserActions()}
          </div>
          <span className="photo__likes">35 likes</span>
          <ul className="photo__comments">
            <li className="photo__comment">
              <span className="photo__comment-author">{post.user.username}</span>
              {post.description}
            </li>
          </ul>
          <ul className="photo__comments">
            {this.renderComments()}
          </ul>
          <span className="photo__time-ago">10 hours ago</span>
          {this.renderCommentForm()}
        </div>
      </section>
    );
  }
}

Post.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  post: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    coverImage: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string,
      profileImage: PropTypes.string,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        message: PropTypes.string,
      })
    ),
  }).isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Post;
