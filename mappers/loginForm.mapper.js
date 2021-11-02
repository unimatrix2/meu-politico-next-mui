export default loginFormMapper = (form) => {
	const { cpf, password } = form;
	return {
		cpf,
		password
	};
};