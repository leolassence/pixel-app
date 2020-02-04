import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';

class UpdatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      location: '',
      description: '',
      coverImage: '',
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { postId }
      },
      // isLoggedIn,
      getPost
    } = this.props;


    getPost(postId).then(({ payload }) => {
      this.setState({
        postId,
        title: payload.title,
        location: payload.location,
        description: payload.description,
        coverImage: payload.coverImage,
      });
    });
  }

  handleSubmit = data => {
    const formData = new FormData();
    formData.append('coverImage', this.state.coverImage);

    this.props.updatePost({
      postId: this.state.postId,
      data,
      formData
    }, this.props.history);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="text-center signin-page">
        <Form schema={schema} onSubmit={this.handleSubmit} className="form" encType="multipart/form-data">
          <h1 className="h3 mb-3 font-weight-normal">Update Post</h1>
          <div className="field">
            <Input
              name="title"
              value={this.state.title}
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="Title"
              className="form-control"
            />
          </div>
          <div className="field">
            <Input
              name="location"
              value={this.state.location}
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="Location"
              className="form-control"
            />
          </div>
          <div className="field">
            <Input
              name="description"
              value={this.state.description}
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="Description"
              className="form-control"
            />
          </div>
          <div className="field">
            <input
              name="coverImage"
              type="file"
              className="form-control"
              accept=".png, .jpg, .jpeg"
              onChange={e => this.setState({ coverImage: e.target.files[0] })}
            />
          </div>
          <div className="buttons">
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

UpdatePost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
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
