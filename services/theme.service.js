import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setDefaultTheme = (theme) => {
	cookies.set('theme', theme);
};

export const getDefaultTheme = () => {
	const theme = cookies.get('theme');
	return theme;
};