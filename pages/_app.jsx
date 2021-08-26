import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider as AuthProvider } from '../contexts/auth.context';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { appTheme, darkTheme } from '../styles/theme';
import { setDefaultTheme, getDefaultTheme } from '../services/theme.service';
import { Provider as TCProvider } from '../contexts/theme.context';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState();

  useEffect(() => {
    switch (getDefaultTheme()) {
      case 'light':
        setTheme(createTheme(appTheme));
        break;
      case 'dark':
        setTheme(createTheme(darkTheme));
        break;
      default:
        setTheme(createTheme(appTheme));
        setDefaultTheme('light');
        break;
    }
  }, []);

  return <AuthProvider>
    <TCProvider>
      {theme ? <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider> : null}
    </TCProvider>
  </AuthProvider>
}

export default MyApp
