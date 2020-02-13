import React from 'react';
import PropTypes from 'prop-types';

const FormHeader = ({ user }) => (
  <header className="profile-form__header">
    <div className="profile-form__avatar-container">
      <img src={user.profileImage} className="profile-form__avatar" alt={user.username} />
    </div>
    <h4 className="profile-form__title">{user.username}</h4>
  </header>
);

FormHeader.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    profileImage: PropTypes.string,
  }).isRequired,
};

export default FormHeader;
