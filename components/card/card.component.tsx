// library imports
import { FC } from "react"

// components
import Favorite from "../favorite/favorite.component";

// types
import { Recipe } from "@/contexts/recipes.context";
type CardProps = {
  recipe: Recipe;
}

const Card: FC<CardProps> = ({ recipe }) => {
  return (
    <div className="card">
      { recipe.name }
      <Favorite recipeId={ recipe.id } />
    </div>
  )
}

export default Card