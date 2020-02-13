import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileImageResolver from '../Common';

const PostHeader = props => {
  const { post } = props;

  return (
    <Fragment>
      <header className="photo__header">
        <div className="photo__header-column">
          <Link to={`/user/${post.user.username}`}>
            <ProfileImageResolver
              profileImage={post.user.profileImage}
              imgClassName="photo__avatar"
              imgAlt={post.user.username}
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
        <Link to={`/post/${post.postId}`}>
          <img className="photo__file" src={post.coverImage} alt={post.title} />
        </Link>
      </div>
    </Fragment>
  );
};

PostHeader.propTypes = {
  post: PropTypes.shape({
    postId: PropTypes.string,
    coverImage: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string,
      profileImage: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default PostHeader;
