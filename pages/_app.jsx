import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { useState, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import handleThemeSetup from '../handlers/theme.handle';
import { Provider as AuthProvider } from '../contexts/auth.context';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState();
  const [themeTrigger, setThemeTrigger] = useState();
  pageProps.themeTrigger = setThemeTrigger;
  useEffect(() => {
      handleThemeSetup(setTheme);
  }, [themeTrigger]);

  return (
    <AuthProvider>
        {theme ? <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider> : null}
    </AuthProvider>
  );
}

export default MyApp;
