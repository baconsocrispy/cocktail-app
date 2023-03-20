// external imports
import { FC, useContext, useEffect, useState } from "react"

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
  const { filterOptions, addFilterOption, removeFilterOption } = useContext(FilteringContext);

  // reset selected state when filterOptions resets
  useEffect(() => {
    if (selected && filterOptions.ingredientIds?.length === 0) {
      setSelected(false)
    }
  }, [ filterOptions, selected ])

  // handlers
  const handleClick = () => {
    selected ? removeFilterOption(option) : addFilterOption(option);
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