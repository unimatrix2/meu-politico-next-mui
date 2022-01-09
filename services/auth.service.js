import { instance } from '../configs/axios.config';
import {
	setAuthCookie,
	removeAuthCookie,
} from '../utils/authCookieManager.util';
import loginFormMapper from '../mappers/loginForm.mapper';
import signupFormMapper from '../mappers/signupForm.mapper';

export const login = async (form, helpers, dispatch, snackBar) => {
	try {
		const { headers, data } = await instance({
			method: 'post',
			url: '/usuario/acesso',
			data: loginFormMapper(form),
		});
		setAuthCookie(headers.authorization, form.remember);
		dispatch({
			type: 'PROVIDE-USER',
			payload: data,
		});
	} catch (error) {
		if (error.response.data.type) {
			helpers.setFieldError('cpf', 'CPF ou senha incorretos');
			helpers.setFieldError('password', 'CPF ou senha incorretos');
		}
		snackBar(
			'Oops! Algo deu errado.',
			'error',
			4000
		);
	}
};

export const signup = async (form, helpers, snackBar) => {
	try {
		await instance.post('/usuario/registro', signupFormMapper(form));
		snackBar(
			'Usuário registrado com sucesso!',
			'success',
			1500
		);
	} catch (error) {
		if (error.response.data.type) {
			switch (error.response.data.type) {
				case 'Registro-CPF-Invalido':
					helpers.setFieldError('cpf', 'CPF Inválido');
					break;
				case 'Usuario-Criar-Email':
					helpers.setFieldError('email', 'Email já cadastrado');
					break;
				case 'Usuario-Criar-Cpf':
					helpers.setFieldError('cpf', 'CPF já cadastrado');
					break;
				case 'Usuario-Criar-Email-Cpf':
					helpers.setFieldError('email', 'Email já cadastrado');
					helpers.setFieldError('cpf', 'CPF já cadastrado');
					break;
				case 'Usuario-Criar-Cpf-Email':
					helpers.setFieldError('email', 'Email já cadastrado');
					helpers.setFieldError('cpf', 'CPF já cadastrado');
					break;
			}
		}
		snackBar(
			'Oops! Algo deu errado.',
			'error',
			4000
		);
	}
};

export const logout = () => {
	removeAuthCookie();
};
