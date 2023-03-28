// library imports
import { FC } from "react";
import Image from "next/image";

// assets
import cocktailImage from '../../public/cocktail.webp';

// types
import { Recipe } from "@/contexts/recipes.context"

type RecipeDisplayProps = {
  recipe: Recipe
}

const RecipeDisplay: FC<RecipeDisplayProps> = ({ recipe }) => {
  return (
    <div className="recipe-display">
      <h2 className="recipe-display__name">{ recipe.name }</h2>

      <div className="recipe-display__image-container">
        <Image 
          src={ cocktailImage } 
          alt={ recipe.name } 
          className="recipe-display__image"
        />
      </div>

      <div className="recipe-display__elements">
        <h3 className="recipe-display__sub-header">Ingredients</h3>
        <ul className="recipe-display__list">
          { recipe.ingredients.map((ingredient) => (
            <li key={ ingredient.id } className="recipe-display__option">
              { ingredient.name }
            </li>
          ))}
        </ul>
      </div>

      <div className="recipe-display__elements">
        <h3 className="recipe-display__sub-header">Steps</h3>
        <ul className="recipe-display__list">
          { recipe.steps.map((step) => (
            <li key={ step.id } className="recipe-display__option">
              { step.name }
            </li>
          ))}
        </ul>
      </div>      
    </div>
  )
}

export default RecipeDisplay