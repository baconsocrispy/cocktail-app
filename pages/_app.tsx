// types
import type { AppProps } from 'next/app'

// components
import Grid from '@/layout/grid/grid.component';
import Nav from '@/layout/nav/nav.component';
import Toolbar from '@/components/toolbar/toolbar.component';

// context
import { UserProvider } from '@/contexts/user.context';
import { ToolsProvider } from '@/contexts/tools.context';
import { IngredientsProvider } from '@/contexts/ingredients.context';
import { CategoriesProvider } from '@/contexts/categories.context';

// styles
import '@/styles/globals.scss'

// fonts
import { Oswald } from 'next/font/google';
import Head from 'next/head';

const oswald = Oswald({ subsets: [ 'latin' ] })

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Grid>
        <UserProvider>
          <Nav />
          <IngredientsProvider>
            <CategoriesProvider>
              <ToolsProvider>
                <Component { ...pageProps } />
              </ToolsProvider>
            </CategoriesProvider>
          </IngredientsProvider>
        </UserProvider>
        <Toolbar />
      </Grid>
    </>
  )
}

export default App;
