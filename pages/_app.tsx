// types
import type { AppProps } from 'next/app'

// components
import Grid from '@/layout/grid/grid.component';
import Nav from '@/layout/nav/nav.component';
import Footerbar from '@/layout/footerbar/footerbar.component';

// context
import { FilteringProvider } from '@/contexts/filtering.context';
import { UserProvider } from '@/contexts/user.context';
import { ToolsProvider } from '@/contexts/tools.context';
import { IngredientsProvider } from '@/contexts/ingredients.context';
import { CategoriesProvider } from '@/contexts/categories.context';

// styles
import '@/styles/globals.scss';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Grid>
      <UserProvider>
        <Nav />
        <IngredientsProvider>
          <CategoriesProvider>
            <ToolsProvider>
              <FilteringProvider>
                <Component { ...pageProps } />
              </FilteringProvider>
            </ToolsProvider>
          </CategoriesProvider>
        </IngredientsProvider>
      </UserProvider>
      <Footerbar />
    </Grid>
  )
}

export default App;
