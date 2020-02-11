import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../PostForm';

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
      isLoggedIn,
      getPost
    } = this.props;

    getPost(postId).then(({ payload }) => {
      if (isLoggedIn && payload.username === localStorage.getItem('username')) {
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
        this.props.history.push('/notfound');
      }
    });
  }

  handleSubmit = ({ data, formData }) => {
    this.props.updatePost({
      postId: this.state.post.postId,
      data,
      formData
    }, this.props.history);
  }

  render() {
    if (this.state.editReady) {
      return (
        <PostForm
          handleSubmit={this.handleSubmit}
          post={this.state.post}
        />
      );
    }

    return null;
  }
}

UpdatePost.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
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
    username: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    coverImage: PropTypes.string,
  }).isRequired,
};

export default UpdatePost;
