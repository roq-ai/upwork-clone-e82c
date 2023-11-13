import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  budget: yup.number().integer().nullable(),
  status: yup.boolean().required(),
  user_id: yup.string().nullable().required(),
});
