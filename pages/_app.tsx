import { AuthProvider } from '../contexts/AuthContext';
import { AppProps } from '../node_modules/next/app';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
