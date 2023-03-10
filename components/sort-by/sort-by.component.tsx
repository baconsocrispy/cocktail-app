// external imports
import { FC } from "react"

// components
import Select from "../select/select.component";

// types
type SortByProps = {
  open: boolean;
}

const sortOptions = [
  'All Recipes',
  'Favorites',
  'I Have Any Of The Ingredients',
  'I Have All Of The Ingredients',
]

const SortBy: FC<SortByProps> = ({ open }) => {
  return (
    <div 
      className={ open ? "sort-by sort-by--open" : "sort-by" }
    >
      <Select 
        header={ 'Choose one sort option'} 
        options={ sortOptions } 
      />
    </div>
  )
}

export default SortBy