const themeStore = (state, action) => {
	switch (action.type) {
		case 'LIGHT-THEME':
			return { ...state, theme: 'light' };
        case 'DARK-THEME':
            return { ...state, theme: 'dark' };
		default:
			return state;
	}
};

export default themeStore;