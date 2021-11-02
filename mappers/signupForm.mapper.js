const signupFormMapper = (form) => {
	const {
		cpf,
		email,
		password,
		lastName,
		firstName,
	} = form;
	return {
		cpf,
		email,
		password,
		lastName,
		firstName,
	};
};

export default signupFormMapper;