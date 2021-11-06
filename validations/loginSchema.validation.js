import * as yup from 'yup';

const loginSchema = yup.object({
	cpf: yup
		.string()
		.trim()
		.matches(/[0-9]/, 'Utilize apenas números')
		.min(11, 'Precisa conter 11 caracteres')
		.max(11, 'Precisa conter 11 caracteres')
		.required('Campo obrigatório'),
	password: yup.string().trim().required('Campo obrigatório'),
	remember: yup.boolean(),
});

export default loginSchema;
