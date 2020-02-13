import React from 'react';
import PropTypes from 'prop-types';
import PostAuthorActions from './PostAuthorActions';
import PostHeader from './PostHeader';
import PostRenderComments from './PostRenderComments';
import PostCommentForm from './PostCommentForm';

const Post = props => {
  const {
    post,
    isLoggedIn,
    history,
    deletePost,
  } = props;

  return (
    <section className="photo">
      <PostHeader post={post} />
      <div className="photo__info">
        <div className="photo__icons">
          <span className="photo__icon">
            <i className="fa fa-heart heart" />
            &nbsp;
          </span>
          <PostAuthorActions
            post={post}
            isLoggedIn={isLoggedIn}
            deletePost={deletePost}
            history={history}
          />
        </div>
        <span className="photo__likes">35 likes</span>
        <ul className="photo__comments">
          <li className="photo__comment">
            <span className="photo__comment-author">{post.user.username}</span>
            {post.description}
          </li>
        </ul>
        <ul className="photo__comments">
          <PostRenderComments comments={post.comments} />
        </ul>
        <span className="photo__time-ago">10 hours ago</span>
        <PostCommentForm
          isLoggedIn={isLoggedIn}
          postId={post.postId}
        />
      </div>
    </section>
  );
};

Post.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  post: PropTypes.shape({
    postId: PropTypes.string,
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
