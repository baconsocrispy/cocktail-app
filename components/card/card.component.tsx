// library imports
import { FC, useContext } from "react"

// components
import Favorite from "../favorite/favorite.component";

// types
import { Recipe } from "@/contexts/recipes.context";
import { UserContext } from "@/contexts/user.context";
type CardProps = {
  recipe: Recipe;
}

const Card: FC<CardProps> = ({ recipe }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="card">
      { recipe.name }
      { user && <Favorite recipeId={ recipe.id } /> }
    </div>
  )
}

export default Card