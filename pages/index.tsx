// components
import FilterBar from "@/components/filterbar/filterbar.component";
import Recipes from "@/components/recipes/recipes.component";
import Toolbar from "@/components/toolbar/toolbar.component";

// context
import { RecipesAPI, RecipesProvider } from "@/contexts/recipes.context";
import { fetchAllRecipes } from "./api/cocktail-api";

// data
const toolbarOptions = [
  'Cabinets', 
  'Favorites', 
  'Recipes', 
  'New Recipe', 
  'Discover'
]

// types
type HomeProps = {
  data: RecipesAPI;
}

export const Home = ({ data }: HomeProps) => {
  const { recipes, recipeCount } = data;
  return (
    <>
      <FilterBar />
        <RecipesProvider recipes={ recipes } recipeCount={ recipeCount }>
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

