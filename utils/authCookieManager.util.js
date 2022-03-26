import cookies from '../configs/cookies.config';

export const setAuthCookie = (token, remember) => {
	const cookieData = {
		token: token,
		ltc: remember
	}
	cookies.set('token', cookieData, {
		sameSite: 'strict',
		maxAge: cookieData.ltc ? 432000000 : 86400000
	})
}

export const removeAuthCookie = () => cookies.remove('token');

export const getAuthCookie = () => cookies.get('token')?.token;

export const checkLongTermAuthCookie = () => cookies
	.get('token').ltc;

export const renewAuthCookie = (token) => {
	const authCookie = cookies.get('token');
	if (authCookie) {
		return setAuthCookie(token, authCookie?.ltc);
	}
	return cookies.remove('token');
}

export const hasAuthCookie = () => Boolean(cookies.get('token')?.token);
