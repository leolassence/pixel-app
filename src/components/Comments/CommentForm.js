import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UID } from 'react-uid';
import schema from './schema';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleChange = e => {
    this.setState({ message: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { message } = this.state;
    const { postId } = this.props;

    schema.isValid({ message }).then(valid => {
      if (valid) {
        this.props.createComment({ message, postId });
        this.setState({ message: '' });
      }
    });
  }

  render() {
    return (
      <div className="photo__add-comment-container">
        <form onSubmit={this.handleSubmit}>
          <UID>
            {id => (
              <input
                ref={id}
                type="text"
                value={this.state.message}
                onChange={e => this.handleChange(e)}
                placeholder="Add a comment..."
                className="photo__add-comment"
              />
          )}
          </UID>
          <i className="fa fa-location-arrow" />
        </form>
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
