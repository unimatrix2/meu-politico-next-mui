import { setDefaultTheme, getDefaultTheme } from '../services/theme.service';
;
const handleThemeChange = (trigger) => {
  switch(getDefaultTheme()) {
    case 'light':
      setDefaultTheme('dark');
      trigger('dark');
      break;
    case 'dark':
      setDefaultTheme('light');
      trigger('light');
      break;
    default:
      break;
  }
}

export default handleThemeChange;