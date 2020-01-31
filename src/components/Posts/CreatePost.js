import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';

class CreatePost extends Component {
  handleSubmit = data => this.props.createPost(data, this.props.history);

  render() {
    return (
      <div className="text-center signin-page">
        <Form schema={schema} onSubmit={this.handleSubmit} className="form">
          <h1 className="h3 mb-3 font-weight-normal">Create Post</h1>
          <div className="field">
            <Input
              name="title"
              type="text"
              placeholder="Title"
              className="form-control"
            />
          </div>
          <div className="field">
            <Input
              name="location"
              type="text"
              placeholder="Location"
              className="form-control"
            />
          </div>
          <div className="field">
            <Input
              name="description"
              type="text"
              placeholder="Description"
              className="form-control"
            />
          </div>
          <div className="field">
            <Input
              name="coverImage"
              type="text"
              placeholder="Cover Image"
              className="form-control"
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

CreatePost.propTypes = {
  history: PropTypes.shape({}).isRequired,
  createPost: PropTypes.func.isRequired
};

export default CreatePost;
