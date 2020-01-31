import * as Yup from 'yup';

const schema = Yup.object().shape({
  signInId: Yup.string()
    .required('Custom required message'),
  password: Yup.string()
    .min(7)
    .required(),
});

export default schema;
