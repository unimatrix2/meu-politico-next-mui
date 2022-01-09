import * as yup from 'yup';

const passwordResetSchema = yup.object({
	oldPassword: yup
		.string()
		.trim()
		.matches(/[A-Z]/, 'Ao menos uma letra maiúscula')
		.matches(/[a-z]/, 'Ao menos uma letra minúscula')
		.matches(/[!@#%^&*+=_?-]/, 'Ao menos um caractere especial')
		.matches(/[^.$]/, 'Não pode conter "." ou "$"')
		.min(8, 'Ao menos 8 caracteres')
		.max(50, 'No máximo 50 caracteres')
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
		.notOneOf([yup.ref('oldPassword'), null], 'Senha nova não pode ser igual a antiga')
		.required('Campo obrigatório'),
	confirmPassword: yup
		.string()
		.trim()
		.oneOf([yup.ref('password'), null], 'Senhas não conferem')
		.required('Campo obrigatório'),
});

export default passwordResetSchema;
