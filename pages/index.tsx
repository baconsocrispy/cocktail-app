// components
import ControlBar from "@/layout/controlbar/controlbar.component";
import FilterOptions from "@/components/filter-options/filter-options.component";
import Recipes from "@/components/recipes/recipes.component";
import Search from "@/components/search/search.component";


// contexts
import { FilteringProvider } from "@/contexts/filtering.context";
import { RecipesProvider } from "@/contexts/recipes.context";
import { SortByProvider } from "@/contexts/sort-by.context";


// api
import { fetchAllRecipes } from "./api/cocktail-api";

// types
import { RecipesAPI } from "./api/cocktail-api";
type HomeProps = {
  data: RecipesAPI;
}

export const Home = ({ data }: HomeProps) => {
  const { recipes, recipeCount } = data || {};
  return (
    <>
      <RecipesProvider recipes={ recipes } recipeCount={ recipeCount }>
        <FilteringProvider>
          <SortByProvider>
            <ControlBar>
              <FilterOptions />
              <Search />
            </ControlBar>
          </SortByProvider>
          <Recipes />
        </FilteringProvider>
      </RecipesProvider>
    </>
  )
}

Home.getInitialProps = async () => {
  const response = await fetchAllRecipes();
  return { data: response }
}

export default Home;

