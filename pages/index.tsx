// components
import FilterBar from "@/components/filterbar/filterbar.component";
import Recipes from "@/components/recipes/recipes.component";
import Toolbar from "@/components/toolbar/toolbar.component";

// context
import { FilteringProvider } from "@/contexts/filtering.context";
import { RecipesProvider } from "@/contexts/recipes.context";

// api
import { fetchAllRecipes } from "./api/cocktail-api";

// types
import { RecipesAPI } from "./api/cocktail-api";
type HomeProps = {
  data: RecipesAPI;
}

// data
const toolbarOptions = [
  'Cabinets', 
  'Favorites', 
  'Recipes', 
  'New Recipe', 
  'Discover'
]

export const Home = ({ data }: HomeProps) => {
  const { recipes, recipeCount } = data;
  return (
    <>
      <RecipesProvider recipes={ recipes } recipeCount={ recipeCount }>
        <FilteringProvider>
          <FilterBar />
        </FilteringProvider>
        <Recipes />
      </RecipesProvider>
      <Toolbar options={ toolbarOptions }/>
    </>
  )
}

Home.getInitialProps = async () => {
  const response = await fetchAllRecipes();
  return { data: response }
}

export default Home;

