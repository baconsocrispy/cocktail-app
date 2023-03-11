// external imports
import { FC, useContext, useState } from "react"

// context
import { FilteringContext } from "@/contexts/filtering.context";

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
  const { updateFilterOptions } = useContext(FilteringContext)

  // handlers
  const handleClick = () => {
    updateFilterOptions(option);
    setSelected(!selected);
  }

  return (
    <li
      role='option'
      aria-selected={ selected }
      onClick={ handleClick } 
      className={ selected ? 'option option--selected' : 'option'}
    >
      { option.name }
    </li>
  )
}

export default Option

// if item is not selected, add item id to correct filterOption array

// determine which type it is ()