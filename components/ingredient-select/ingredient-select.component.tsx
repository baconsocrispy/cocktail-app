// external imports
import { FC } from "react"

// types
type IngredientSelectProps = {
  header: string;
  ingredients: string[];
}

const IngredientSelect: FC<IngredientSelectProps> = (
  { header, ingredients }
) => {
  return (
    <div className="ingredient-select">
      
      <h4 className="ingredient-select__header">{ header }</h4>

      <ul className="ingredient-select__ingredients">
        { ingredients.map((ingredient) => (
          <li className="ingredient-select__ingredient" key={ ingredient }>
            { ingredient }
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default IngredientSelect