// components
import FilterBar from "@/components/filterbar/filterbar.component";
import Recipes from "@/components/recipes/recipes.component";
import Sidebar from "@/components/sidebar/sidebar.component";
import Toolbar from "@/components/toolbar/toolbar.component";

const toolbarOptions = [
  'Cabinets', 
  'Favorites', 
  'Recipes', 
  'New Recipe', 
  'Discover'
]

const filterbarOptions = [
  'Ingredients',
  'Category',
  'Sort By',
  'Search',
  'Reset'
]

export const Home = () => {
  return (
    <>
      <FilterBar options={ filterbarOptions } />
      <Recipes />
      <Toolbar options={ toolbarOptions }/>
    </>
  )
}

export default Home;
