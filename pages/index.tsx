// components
import FilterBar from "@/components/filter-bar/filter-bar.component";
import Recipes from "@/components/recipes/recipes.component";
import Sidebar from "@/components/side-bar/side-bar.component";
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
