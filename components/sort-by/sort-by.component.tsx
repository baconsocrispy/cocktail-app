// external imports
import { FC, useContext } from "react"

// components
import Select from "../select/select.component";

// context
import { SortByContext } from "@/contexts/sort-by.context";

// types
type SortByProps = {
  open: boolean;
}

const SortBy: FC<SortByProps> = ({ open }) => {
  // state
  const { sortOptions } = useContext(SortByContext)
  
  return (
    <div 
      className={ open ? "sort-by" : "sort-by--closed" }
    >
      <Select 
        header={ 'Choose one sort option'} 
        options={ sortOptions } 
      />
    </div>
  )
}

export default SortBy