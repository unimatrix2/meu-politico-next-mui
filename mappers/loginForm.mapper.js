const loginFormMapper = (form) => {
	const { cpf, password } = form;
	return {
		cpf,
		password
	};
};

export default loginFormMapper;