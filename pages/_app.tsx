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
import { ToolsProvider } from '@/contexts/tools.context';
import { IngredientsProvider } from '@/contexts/ingredients.context';
import { CategoriesProvider } from '@/contexts/categories.context';


export const App = ({ Component, pageProps }: AppProps) => {
  return (
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
  )
}

export default App;
