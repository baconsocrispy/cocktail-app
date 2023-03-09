// components
import FilterBar from "@/components/filterbar/filterbar.component";
import Recipes from "@/components/recipes/recipes.component";
import Sidebar from "@/components/sidebar/sidebar.component";
import Toolbar from "@/components/toolbar/toolbar.component";

export const Home = () => {
  return (
    <>
      <FilterBar />
      <Sidebar />
      <Recipes />
      <Toolbar />
    </>
  )
}

export default Home;
