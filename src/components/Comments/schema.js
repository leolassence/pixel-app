import * as Yup from 'yup';

const schema = Yup.object().shape({
  message: Yup.string()
    .min(3)
    .required('Required field')
});

export default schema;
