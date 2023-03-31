// library imports
import { FC, useContext } from "react"

// components
import Select from "../select/select.component";

// context
import { CategoriesContext } from "@/contexts/categories.context";

// types
type CategoriesProps = {
  open: boolean;
}

const Categories: FC<CategoriesProps> = ({ open }) => {
  // state
  const { categories } = useContext(CategoriesContext);

  return (
    <div 
      className={ open ? "categories" : "categories--closed" }
    >
      <Select 
        header={ 'Select one or more categories'} 
        options={ categories } 
      />
    </div>
  )
}

export default Categories