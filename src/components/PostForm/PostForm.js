import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';
import schema from './schema';
import FormHeader from '../FormHeader';
import PostFormField from './PostFormField';

class PostForm extends Component {
  constructor(props) {
    super(props);

    const { post } = this.props;

    this.state = {
      title: post.title || '',
      location: post.location || '',
      description: post.description || '',
      coverImage: post.coverImage || '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleData = data => {
    const { handleSubmit } = this.props;
    const { coverImage } = this.state;
    const formData = new FormData();

    formData.append('coverImage', coverImage);

    handleSubmit({ data, formData });
  }

  render() {
    return (
      <main className="edit-profile">
        <section className="profile-form">
          <FormHeader user={this.props.user} />
          <Form schema={schema} onSubmit={this.handleData} className="edit-profile__form" encType="multipart/form-data">
            <PostFormField
              name="title"
              label="Title"
              value={this.state.title}
              handleChange={this.handleChange}
            />
            <PostFormField
              name="location"
              label="Location"
              value={this.state.location}
              handleChange={this.handleChange}
            />
            <PostFormField
              name="description"
              label="Description"
              value={this.state.description}
              handleChange={this.handleChange}
            />
            <div className="edit-profile__form-row">
              <label htmlFor="coverImage" className="edit-profile__label">Image</label>
              <input
                id="coverImage"
                name="coverImage"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={e => this.setState({ coverImage: e.target.files[0] })}
                className="edit-profile__input"
              />
            </div>
            <div className="edit-profile__form-row">
              <div className="edit-profile__form-row">
                <label htmlFor="submit" className="edit-profile__label" />
                <input id="submit" type="submit" value="Submit" />
              </div>
            </div>
          </Form>
        </section>
      </main>
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
  user: PropTypes.shape({
    username: PropTypes.string,
    profileImage: PropTypes.string,
  }).isRequired,
};

export default PostForm;
