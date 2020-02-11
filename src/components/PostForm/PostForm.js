import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';

import userImg from '../../assets/images/user.png';

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
      <main className="edit-profile">
        <section className="profile-form">
          <header className="profile-form__header">
            <div className="profile-form__avatar-container">
              <img src={userImg} className="profile-form__avatar" alt="User Img" />
            </div>
            <h4 className="profile-form__title">RichGeek</h4>
          </header>

          <Form schema={schema} onSubmit={this.handleData} className="edit-profile__form" encType="multipart/form-data">
            <div className="edit-profile__form-row">
              <label htmlFor="title" className="edit-profile__label">Title</label>
              <Input
                id="title"
                name="title"
                value={this.state.title}
                onChange={e => this.handleChange(e)}
                type="text"
                className="edit-profile__input"
              />
            </div>
            <div className="edit-profile__form-row">
              <label htmlFor="location" className="edit-profile__label">Location</label>
              <Input
                id="location"
                name="location"
                value={this.state.location}
                onChange={e => this.handleChange(e)}
                type="text"
                className="edit-profile__input"
              />
            </div>
            <div className="edit-profile__form-row">
              <label htmlFor="description" className="edit-profile__label">Description</label>
              <Input
                id="description"
                name="description"
                value={this.state.description}
                onChange={e => this.handleChange(e)}
                type="text"
                className="edit-profile__input"
              />
            </div>
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
};

export default PostForm;
