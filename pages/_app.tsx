// types
import type { AppProps } from 'next/app'

// styles
import '@/styles/globals.scss'

export const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App;
