// external imports
import { FC, useState } from "react"

// types
type IngredientProps = {
  ingredient: string;
}

const Ingredient: FC<IngredientProps> = ({ ingredient }) => {
  // state
  const [ selected, setSelected ] = useState(false);

  // handlers
  const handleClick = () => setSelected(!selected);

  return (
    <li 
      onClick={ handleClick } 
      className={ selected ? 'ingredient ingredient--selected' : 'ingredient'}
    >
      { ingredient }
    </li>
  )
}

export default Ingredient