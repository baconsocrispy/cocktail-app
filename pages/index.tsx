// components
import FilterBar from "@/components/filterbar/filterbar.component";
import Recipes from "@/components/recipes/recipes.component";
import Sidebar from "@/components/sidebar/sidebar.component";
import Tools from "@/components/tools/tools.component";

export const Home = () => {
  return (
    <>
      <FilterBar />
      <Sidebar />
      <Recipes />
      <Tools />
    </>
  )
}

export default Home;
