import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';

const PostFormField = props => (
  <div className="edit-profile__form-row">
    <label htmlFor={props.name} className="edit-profile__label">{props.label}</label>
    <Input
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
      type={props.type}
      className="edit-profile__input"
    />
  </div>
);

PostFormField.defaultProps = {
  type: 'text',
};

PostFormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default PostFormField;
