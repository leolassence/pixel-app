import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';

import {
  required,
  minValue,
  composeValidators,
} from '../../assets/helpers/formvalidation';

class CreatePost extends Component {
  handleSubmit = ({
    title,
    description,
    location,
    coverImage,
  }) => this.props.createPost({
    title,
    description,
    location,
    coverImage,
  }, this.props.history);

  render() {
    return (
      <div className="text-center signin-page">
        <Form
          onSubmit={this.handleSubmit}
          render={({
            handleSubmit,
            form,
            pristine,
          }) => (
            <form className="form-signin" onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Create Post</h1>
              <Field name="title" validate={composeValidators(required, minValue(3))}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="title"
                      component="input"
                      placeholder="Title"
                      className="form-control"
                    />
                    {meta.error && meta.touched && <span className="form-errors">{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="location" validate={composeValidators(required, minValue(3))}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="location"
                      component="input"
                      placeholder="Location"
                      className="form-control"
                    />
                    {meta.error && meta.touched && <span className="form-errors">{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="coverImage" validate={composeValidators(required, minValue(3))}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="coverImage"
                      component="input"
                      placeholder="Cover Image"
                      className="form-control"
                    />
                    {meta.error && meta.touched && <span className="form-errors">{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="description" validate={composeValidators(required, minValue(10))}>
                {({ input, meta }) => (
                  <div>
                    <textarea
                      {...input}
                      type="description"
                      component="textarea"
                      placeholder="Description"
                      className="form-control"
                      cols="5"
                      rows="3"
                    />
                    {meta.error && meta.touched && <span className="form-errors">{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={pristine}>
                  Submit
                </button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

CreatePost.propTypes = {
  history: PropTypes.shape({}).isRequired,
  createPost: PropTypes.func.isRequired
};

export default CreatePost;
