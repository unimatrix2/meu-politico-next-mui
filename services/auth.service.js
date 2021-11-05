import { instance } from '../configs/axios.config';
import { setAuthCookie, removeAuthCookie } from '../utils/authCookieManager.util';
import loginFormMapper from '../mappers/loginForm.mapper';
import signupFormMapper from '../mappers/signupForm.mapper';

export const login = async (form, helpers, dispatch) => {
	try {
		const { headers, data } = await instance({
			method: 'post',
			url: '/usuario/acesso',
			data: loginFormMapper(form)
		});
		setAuthCookie(headers.authorization, form.remember);
		dispatch({
			type: 'PROVIDE-USER',
			payload: data
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

export const logout = () => {
	removeAuthCookie();

};
