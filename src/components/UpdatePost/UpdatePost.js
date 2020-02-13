import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostFormContainer from '../PostForm';

class UpdatePost extends Component {
  constructor(props) {
    super(props);

    this.state = { editReady: false };
  }

  componentDidMount() {
    const {
      match: {
        params: { postId }
      },
      history,
      getPost,
    } = this.props;

    getPost(postId).then(({ payload }) => {
      // TODO helper to manage this
      if (payload.user.username === localStorage.getItem('username')) {
        this.setState({
          editReady: true,
          post: {
            postId,
            title: payload.title,
            location: payload.location,
            description: payload.description,
            coverImage: payload.coverImage,
          }
        });
      } else {
        this.setState({ editReady: false });
        history.push('/notfound');
      }
    });
  }

  handleSubmit = ({ data, formData }) => {
    const { history, updatePost } = this.props;
    const { post: { postId } } = this.state;

    updatePost({ postId, data, formData }, history);
  }

  render() {
    const { post, editReady } = this.state;

    if (editReady) {
      return (
        <PostFormContainer
          handleSubmit={this.handleSubmit}
          post={post}
        />
      );
    }

    return null;
  }
}

UpdatePost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  updatePost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    coverImage: PropTypes.string,
  }).isRequired,
};

export default UpdatePost;
