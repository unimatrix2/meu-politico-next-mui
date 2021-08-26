import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider as AuthProvider } from '../contexts/auth.context';
import { ThemeProvider } from '@material-ui/core';
import { useState, useEffect, useContext } from 'react';
import handleThemeSetup from '../handlers/theme.handle';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState();
  const [themeTrigger, setThemeTrigger] = useState();
  pageProps.themeTrigger = setThemeTrigger;
  useEffect(() => {
      handleThemeSetup(setTheme);
  }, [themeTrigger]);

  return <AuthProvider>
      {theme ? <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider> : null}
  </AuthProvider>
}

export default MyApp;
