import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'equalTo', function equalTo(ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg || 'Password must be the same',
    params: { reference: ref.path },
    test(value) {
      return value === this.resolve(ref);
    }
  });
});

const schema = Yup.object().shape({
  email: Yup.string()
    .email('This not an email')
    .required('Email is required'),
  username: Yup.string()
    .test(
      'valid username',
      'Username should be in lowercase and contain only letters numbers or (_ , .))',
      value => value.match(/[^a-z0-9_.]/g, '') === null
    )
    .min(3)
    .required('Username is required'),
  password: Yup.string()
    .min(7)
    .required('Password is required'),
  repeatPassword: Yup.string()
    .min(7)
    .required('Password is required')
    .equalTo(Yup.ref('password')),
});

export default schema;
