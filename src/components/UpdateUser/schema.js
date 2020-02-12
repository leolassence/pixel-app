import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .required('Required field'),
  username: Yup.string()
    .min(3)
    .required('Required field'),
  website: Yup.string().url(),
  bio: Yup.string(),
  phone: Yup.string(),
  gender: Yup.string(),
});

export default schema;
