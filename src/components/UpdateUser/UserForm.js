import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select } from '@rocketseat/unform';
import schema from './schema';

import userImg from '../../assets/images/user.png';

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.genderOptions = [
      { id: 'male', title: 'Male' },
      { id: 'female', title: 'Female' },
    ];

    this.state = {
      name: this.props.user.name || '',
      username: this.props.user.username || '',
      website: this.props.user.website || '',
      bio: this.props.user.bio || '',
      phone: this.props.user.phone || '',
      profileImage: this.props.user.profileImage || '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleData = data => {
    const formData = new FormData();
    formData.append('coverImage', this.state.profileImage);

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
              <label className="edit-profile__label">name</label>
              <Input
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                type="text"
                className="edit-profile__input"
              />
            </div>
            <div className="edit-profile__form-row">
              <label className="edit-profile__label">username</label>
              <Input
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
                type="text"
                className="edit-profile__input"
              />
            </div>
            <div className="edit-profile__form-row">
              <label className="edit-profile__label">website</label>
              <Input
                name="website"
                value={this.state.website}
                onChange={e => this.handleChange(e)}
                type="text"
                className="edit-profile__input"
              />
            </div>
            <div className="edit-profile__form-row">
              <label className="edit-profile__label">bio</label>
              <Input
                name="bio"
                value={this.state.bio}
                onChange={e => this.handleChange(e)}
                type="text"
                className="edit-profile__input"
              />
            </div>
            <div className="edit-profile__form-row">
              <label className="edit-profile__label">phone</label>
              <Input
                name="phone"
                value={this.state.phone}
                onChange={e => this.handleChange(e)}
                type="text"
                className="edit-profile__input"
              />
            </div>
            <div className="edit-profile__form-row">
              <label className="edit-profile__label">Gender</label>
              <Select
                name="gender"
                options={this.genderOptions}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="edit-profile__form-row">
              <label className="edit-profile__label">Image</label>
              <input
                name="profileImage"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={e => this.setState({ profileImage: e.target.files[0] })}
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

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string.isRequired,
    website: PropTypes.string,
    bio: PropTypes.string,
    phone: PropTypes.string,
    gender: PropTypes.string,
    profileImage: PropTypes.string,
  }).isRequired,
};

export default UserForm;
