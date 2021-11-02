import instance from '../configs/axios.config';
import loginFormMapper from '../mappers/loginForm.mapper';
import signupFormMapper from '../mappers/signupForm.mapper';

export const login = async (form, helpers, dispatch) => {
	try {
		const { data } = await instance.post(
			'/usuario/acesso',
			loginFormMapper(form)
		);
		dispatch({
			type: 'PROVIDE-USER',
			payload: data,
		});
	} catch (error) {
		if (error.response.data.type) {
			helpers.setFieldError('cpf', 'CPF ou senha incorretos');
			helpers.setFieldError('password', 'CPF ou senha incorretos');
		}
	}
};

export const signup = async (form, helpers, dispatch) => {
	try {
		await instance.post(
			'/usuario/registro',
			signupFormMapper(form)
		);
		return true;
	} catch (error) {
		// error handling here
	}
};

export const logout = async () => {
	await instance.get('/usuario/logout');
};
