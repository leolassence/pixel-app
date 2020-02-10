import React, { Component } from 'react';
import PropTypes from 'prop-types';

import userImg from '../../assets/images/user.png';

const EditProfile = () => (
  <main className="edit-profile">
    <section className="profile-form">
      <header className="profile-form__header">
        <div className="profile-form__avatar-container">
          <img
            src={userImg}
            alt="avatar"
            className="profile-form__avatar"
          />
        </div>
        <h4 className="profile-form__title">RichGeek</h4>
      </header>
      <form action="#" className="edit-profile__form">
        <div className="edit-profile__form-row">
          <label for="name" className="edit-profile__label">Name
          </label>
          <input
            id="name"
            type="text"
            className="edit-profile__input"
          />
        </div>
        <div className="edit-profile__form-row">
          <label for="username" className="edit-profile__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="edit-profile__input"
          />
        </div>
        <div className="edit-profile__form-row">
          <label for="website" className="edit-profile__label">
            Website
          </label>
          <input
            type="url"
            id="website"
            className="edit-profile__input"
          />
        </div>
        <div className="edit-profile__form-row">
          <label for="bio" className="edit-profile__label">
            Bio
          </label>
          <textarea id="bio" className="edit-profile__textarea"></textarea>
        </div>
        <div className="edit-profile__form-row">
          <label for="email" className="edit-profile__label">
            Email
          </label>
          <input
            type="email"
            className="edit-profile__input"
            id="email"
            />
        </div>
        <div className="edit-profile__form-row">
          <label for="phone-number" className="edit-profile__label">
            Phone Number
          </label>
          <input
            type="text"
            className="edit-profile__input"
            id="phone-number"
            />
        </div>
        <div className="edit-profile__form-row">
          <label for="gender" className="edit-profile__label">Gender</label>
          <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="whatever">Custom</option>
          </select>
        </div>
        <div className="edit-profile__form-row">
          <div className="edit-profile__form-row">
            <label className="edit-profile__label"></label>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </section>
  </main>
);


EditProfile.propTypes = {};

export default EditProfile;
