import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.post.title || '',
      location: this.props.post.location || '',
      description: this.props.post.description || '',
      coverImage: this.props.post.coverImage || '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleData = data => {
    const formData = new FormData();
    formData.append('coverImage', this.state.coverImage);

    this.props.handleSubmit({ data, formData });
  }

  render() {
    return (
      <div className="text-center signin-page">
        <Form schema={schema} onSubmit={this.handleData} className="form" encType="multipart/form-data">
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

PostForm.defaultProps = {
  post: {
    title: '',
    location: '',
    description: '',
    coverImage: '',
  },
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    coverImage: PropTypes.string,
  }),
};

export default PostForm;
