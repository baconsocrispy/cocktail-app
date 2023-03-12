// external imports
import { useContext, useEffect } from "react";

// components
import Card from "../card/card.component"

// context
import { RecipesContext } from "@/contexts/recipes.context";
import { FilteringContext } from "@/contexts/filtering.context";
import { filterRecipes } from "@/pages/api/cocktail-api";

const Recipes = () => {
  // state
  const { recipes, updateRecipes } = useContext(RecipesContext);
  const { filterOptions } = useContext(FilteringContext);

  // filter recipes when filterOptions get updated
  useEffect(() => {
    const getFilteredRecipes = async () => {
      const response = await filterRecipes(filterOptions);
    }
    getFilteredRecipes();
  }, [ filterOptions ])
  
  return (
    <div className="recipes">
      { recipes.map((recipe) => (
        <Card key={ recipe.id } title={ recipe.name } />
      ))}
    </div>
  )
}

export default Recipes