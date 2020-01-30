import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';


const FormField = ({
  name,
  validator,
  type,
  component,
  placeholder,
}) => (
  <div className="field">
    <Field name={name} validate={validator}>
      {({ input, meta }) => (
        <div>
          <input
            {...input}
            type={type}
            component={component}
            placeholder={placeholder}
            className="form-control"
          />
          <div className="form-errors">
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        </div>
      )}
    </Field>
  </div>
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  validator: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormField;
