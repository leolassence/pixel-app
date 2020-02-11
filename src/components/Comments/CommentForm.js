import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    this.props.createComment({
      message: this.state.message,
      postId: this.props.postId,
    });

    this.setState({ message: '' });
  }

  render() {
    return (
      <div className="photo__add-comment-container">
        <Form schema={schema} onSubmit={this.handleSubmit}>
          <Input
            name="message"
            type="text"
            value={this.state.message}
            onChange={e => this.handleChange(e)}
            placeholder="Add a comment..."
            className="photo__add-comment"
          />
          <i className="fa fa-location-arrow" />
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
