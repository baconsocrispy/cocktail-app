// components
import FilterBar from "@/components/filterbar/filterbar.component";
import Recipes from "@/components/recipes/recipes.component";


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
            <FilterBar />
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

