const userStore = (state, action) => {
	switch (action.type) {
		case 'PROVIDE-USER':
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export default userStore;