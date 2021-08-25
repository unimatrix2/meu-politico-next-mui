const themeStore = (state, action) => {
	switch (action.type) {
		case 'PROVIDE-THEME':
			return { ...state, theme: action.payload };
		default:
			return state;
	}
};

export default themeStore;