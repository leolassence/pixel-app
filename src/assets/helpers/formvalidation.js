const required = value => (value ? undefined : 'Required');

const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);

const isEmail = value => (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Must be an Email' : undefined);

// minValue(18)
const minValue = min => value => value.length >= min ? undefined : `Should be greater than ${min}`;

// validate={composeValidators(required, mustBeNumber, minValue(18))}
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const validatePassword = values => {
  const errors = {};

  if (values.password !== values.repeatPassword) {
    errors.repeatPassword = 'Password must be equal to repeat password';
  }

  return errors;
};

export {
  required,
  mustBeNumber,
  minValue,
  composeValidators,
  isEmail,
  validatePassword
};
