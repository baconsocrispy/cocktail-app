// components
import FilterBar from "@/components/filterbar/filterbar.component";
import Recipes from "@/components/recipes/recipes.component";
import Toolbar from "@/components/toolbar/toolbar.component";

// context
import { RecipesProvider } from "@/contexts/recipes.context";

// data
const toolbarOptions = [
  'Cabinets', 
  'Favorites', 
  'Recipes', 
  'New Recipe', 
  'Discover'
]

export const Home = () => {
  return (
    <>
      <FilterBar />
      <RecipesProvider>
        <Recipes />
      </RecipesProvider>
      <Toolbar options={ toolbarOptions }/>
    </>
  )
}

export default Home;
