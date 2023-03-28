// components
import ControlBar from "@/layout/controlbar/controlbar.component";
import Categories from "@/components/categories/categories.component";
import Ingredients from "@/components/ingredients/ingredients.component";
import SortBy from "@/components/sort-by/sort-by.component";
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
import ControlOptions from "@/components/control-options/control-options.component";
import ResetButton from "@/components/reset-button/reset-button.component";
type HomeProps = {
  data: RecipesAPI;
}

// data
const controlOptions = [ 'Ingredients', 'Categories', 'Sort By' ];
const sidebarComponents = [
  <Ingredients key='ingredients' open={ false} />,
  <Categories key='categories' open={ false } />,
  <SortBy key='sort-by' open={ false } /> 
]

export const Home = ({ data }: HomeProps) => {
  const { recipes, recipeCount } = data || {};
  return (
    <RecipesProvider recipes={ recipes } recipeCount={ recipeCount }>
        <SortByProvider>
          <ControlBar>
            <ControlOptions 
              options={ controlOptions }
              sidebarComponents={ sidebarComponents }
            />
            <Search />
            <ResetButton />
          </ControlBar>
        </SortByProvider>
        <Recipes />
    </RecipesProvider>
  )
}

Home.getInitialProps = async () => {
  const response = await fetchAllRecipes();
  return { data: response }
}

export default Home;

