const userStore = (state, action) => {
	switch (action.type) {
		case 'PROVIDE-USER':
			return { ...state, user: action.payload };
		case 'LOGOUT':
			return { ...state, user: {} }
		default:
			return state;
	}
};

export default userStore;