import '../styles/globals.css'
import { Provider as AuthProvider } from '../contexts/auth.context';

function MyApp({ Component, pageProps }) {
  return <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
}

export default MyApp
