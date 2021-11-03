import cookies from '../configs/cookies.config';

export const setDefaultTheme = (theme) => {
	cookies.set('theme', theme);
};

export const getDefaultTheme = () => {
	const theme = cookies.get('theme');
	return theme;
};