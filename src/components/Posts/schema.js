import * as Yup from 'yup';

const schema = Yup.object().shape({
  title: Yup.string()
    .min(3)
    .required('Required field'),
  location: Yup.string()
    .min(3)
    .required('Required field'),
  description: Yup.string()
    .required('Required field')
});

export default schema;
