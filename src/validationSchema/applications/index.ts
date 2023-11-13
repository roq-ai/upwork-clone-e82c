import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.boolean().required(),
  description: yup.string().required(),
  job_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
