import React from 'react';
import PropTypes from 'prop-types';
import defaultProfileImage from '../../assets/images/user.png';

const ProfileImageResolver = props => (
  <img
    src={props.profileImage}
    className={props.imgClassName}
    alt={props.imgAlt}
  />
);

ProfileImageResolver.defaultProps = {
  profileImage: defaultProfileImage,
  imgAlt: 'Default Alt Image'
};

ProfileImageResolver.propTypes = {
  profileImage: PropTypes.string,
  imgClassName: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};

export default ProfileImageResolver;
