// external imports
import { FC, useContext, useEffect, useState } from "react"

// context
import { FilteringContext } from "@/contexts/filtering.context";

// types
import { Category } from "@/contexts/categories.context";
import { Ingredient } from "@/contexts/ingredients.context";
import { Portion } from "../form-portion/form-portion.component";
import { SortOption } from "@/contexts/sort-by.context";
import { Tool } from "@/contexts/tools.context";

type OptionProps = {
  option: Category | Ingredient | SortOption | Tool | Portion;
}

const Option: FC<OptionProps> = ({ option }) => {
  // state
  const [ selected, setSelected ] = useState(false);
  const { 
    filterOptions, 
    addFilterOption, 
    removeFilterOption 
  } = useContext(FilteringContext);

  // reset selected state when filterOptions resets
  useEffect(() => { 
    switch (option.class.toLowerCase()) {
      case 'category':
        if (selected && filterOptions.categoryIds?.length === 0) {
          setSelected(false)
        }
        break;
      case 'ingredient':
        if (selected && filterOptions.ingredientIds?.length === 0) {
          setSelected(false)
        }
        break;
      case 'sortoption':
        if (selected && filterOptions.sortOption !== option.name.toString()) {
          setSelected(false)
        }
        break;
    }
  }, [ filterOptions, selected, option ])

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