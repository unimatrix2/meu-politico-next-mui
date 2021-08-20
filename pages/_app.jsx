import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider as AuthProvider } from '../contexts/auth.context';
import { createTheme, ThemeProvider } from '@material-ui/core';
import appTheme from '../styles/theme';

const theme = createTheme(appTheme);

function MyApp({ Component, pageProps }) {
  return <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </AuthProvider>
}

export default MyApp
