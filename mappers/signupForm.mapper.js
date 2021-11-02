export default signupFormMapper = (form) => {
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