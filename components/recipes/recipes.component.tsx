// external imports
import { useContext } from "react";

// components
import Card from "../card/card.component"

// context
import { RecipesContext } from "@/contexts/recipes.context";

const Recipes = () => {
  // state
  const { 
    recipes, 
    recipeCount, 
    updateRecipes 
  } = useContext(RecipesContext)
  
  return (
    <div className="recipes">
      <div>{ recipeCount }</div>
      { recipes.map((recipe) => (
        <Card key={ recipe.id } title={ recipe.name } />
      ))}
    </div>
  )
}

export default Recipes