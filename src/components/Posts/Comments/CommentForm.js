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
      <div className="text-center signin-page">
        <Form schema={schema} onSubmit={this.handleSubmit} className="form">
          <div className="field">
            <Input
              name="message"
              type="text"
              value={this.state.message}
              onChange={e => this.handleChange(e)}
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
