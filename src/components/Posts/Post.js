import React from 'react';
import PropTypes from 'prop-types';
import PostAuthorActions from './PostAuthorActions';
import PostHeader from './PostHeader';
import PostRenderComments from './PostRenderComments';
import PostCommentForm from './PostCommentForm';
import PostLike from './PostLike';

const Post = props => {
  const {
    post,
    isLoggedIn,
    history,
    deletePostRequest,
    likePostRequest,
  } = props;

  return (
    <section className="photo">
      <PostHeader post={post} />
      <div className="photo__info">
        <div className="photo__icons">
          <PostLike
            likePostRequest={likePostRequest}
            postId={post.postId}
            likes={post.likes}
            isLoggedIn={isLoggedIn}
          />
          <PostAuthorActions
            post={post}
            isLoggedIn={isLoggedIn}
            deletePostRequest={deletePostRequest}
            history={history}
          />
        </div>
        <span className="photo__likes">{post.likeCount}</span>
        <ul className="photo__comments">
          <li className="photo__comment">
            <span className="photo__comment-author">{post.user.username}</span>
            <strong>{post.title}</strong>
          </li>
          <li className="photo__comment">
            {post.description}
          </li>
        </ul>
        <span className="photo__time-ago">10 hours ago</span>
        {post.comments.length ? <hr className="post_comments_hr" /> : null}
        <ul className="photo__comments">
          <PostRenderComments comments={post.comments} />
        </ul>
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
    likeCount: PropTypes.number,
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
    likes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  deletePostRequest: PropTypes.func.isRequired,
  likePostRequest: PropTypes.func.isRequired,
};

export default Post;
