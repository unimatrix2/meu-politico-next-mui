import { getDefaultTheme, setDefaultTheme } from "../services/theme.service";
import { createTheme } from "@material-ui/core";
import { appTheme, darkTheme } from "../styles/theme";

const handleThemeSetup = updater => {
  switch (getDefaultTheme()) {
		case 'light':
			updater(createTheme(appTheme));
			break;
		case 'dark':
			updater(createTheme(darkTheme));
			break;
		default:
			updater(createTheme(appTheme));
			setDefaultTheme('light');
			break;
	}
};

export default handleThemeSetup;