// types
import type { AppProps } from 'next/app'

// components
import Grid from '@/layout/grid/grid.component';
import Nav from '@/components/nav/nav.component';

// context
import { UserProvider } from '@/contexts/user.context';

// styles
import '@/styles/globals.scss'
import Toolbar from '@/components/toolbar/toolbar.component';


export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Grid>
      <UserProvider>
        <Nav />
        <Component { ...pageProps } />
      </UserProvider>
      <Toolbar />
    </Grid>
  )
}

export default App;
