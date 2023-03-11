// external imports
import { FC, useState } from "react"

// types
import { Category } from "@/contexts/categories.context";
import { Ingredient } from "@/contexts/ingredients.context";
import { SortOption } from "@/contexts/sort-by.context";

type OptionProps = {
  option: Category | Ingredient | SortOption;
}

const Option: FC<OptionProps> = ({ option }) => {
  // state
  const [ selected, setSelected ] = useState(false);

  // handlers
  const handleClick = () => setSelected(!selected);

  return (
    <li 
      onClick={ handleClick } 
      className={ selected ? 'option option--selected' : 'option'}
    >
      { option.name }
    </li>
  )
}

export default Option