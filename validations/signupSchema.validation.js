import * as yup from 'yup';

const signupSchema = yup.object({
	cpf: yup
		.string()
		.trim()
		.matches(/[0-9]/, 'Utilize apenas números')
		.min(11, 'Precisa conter 11 caracteres')
		.max(11, 'Precisa conter 11 caracteres')
		.required('Campo obrigatório'),
	password: yup
		.string()
		.trim()
		.matches(/[A-Z]/, 'Ao menos uma letra maiúscula')
    .matches(/[a-z]/, 'Ao menos uma letra minúscula')
    .matches(/[!@#%^&*+=_?-]/, 'Ao menos um caractere especial')
    .matches(/[^.$]/, 'Não pode conter "." ou "$"')
    .min(8, 'Ao menos 8 caracteres')
    .max(50, 'No máximo 50 caracteres')
		.required('Campo obrigatório'),
	firstName: yup
		.string()
		.trim()
		.matches(/[^0-9]/, 'Não pode conter números')
		.min(3, 'Ao menos 3 caracteres')
		.max(50, 'No máximo 50 caracteres')
		.required('Campo obrigatório'),
	lastName: yup
		.string()
		.trim()
		.matches(/[^0-9]/, 'Não pode conter números')
		.min(3, 'Ao menos 3 caracteres')
		.max(100, 'No máximo 100 caracteres')
		.required('Campo obrigatório'),
	email: yup
		.string()
		.trim()
		.email()
		.required('Campo obrigatório'),
	confirmPassword: yup
		.string()
		.trim()
		.oneOf([yup.ref('password'), null], 'Senhas não conferem')
		.required('Campo obrigatório'),
});

export default signupSchema;
