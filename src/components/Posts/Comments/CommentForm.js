import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';

class CommentForm extends Component {
  handleSubmit = data => {
    this.props.createComment({
      message: data.message,
      postId: this.props.postId,
    });
  }

  render() {
    return (
      <div className="text-center signin-page">
        <Form schema={schema} onSubmit={this.handleSubmit} className="form">
          <div className="field">
            <Input
              name="message"
              type="text"
              placeholder="Comment"
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

CommentForm.defaultProps = {};

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
  createComment: PropTypes.func.isRequired,
};

export default CommentForm;
