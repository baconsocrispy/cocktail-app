// types
import type { AppProps } from 'next/app'

// components
import Grid from '@/components/grid/grid.component';
import Nav from '@/components/nav/nav.component';

// styles
import '@/styles/globals.scss'

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Grid>
      <Nav />
      <Component {...pageProps} />
    </Grid>
  )
}

export default App;
