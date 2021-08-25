import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider as AuthProvider } from '../contexts/auth.context';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { appTheme, darkTheme } from '../styles/theme';
import { setDefaultTheme, getDefaultTheme } from '../services/theme.service';
import { Provider as TCProvider } from '../contexts/theme.context';

function MyApp({ Component, pageProps }) {

  let theme = getDefaultTheme();
  if (theme && theme == 'dark') {
    theme = createTheme(darkTheme);
  } else {
    theme = createTheme(appTheme);
    setDefaultTheme('light');
  }


  return <AuthProvider>
    <TCProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </TCProvider>
  </AuthProvider>
}

export default MyApp
