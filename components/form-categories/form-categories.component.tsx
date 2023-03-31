// external imports
import { FC, useContext } from "react"

// components
import FormSelect from "../form-select/form-select.component";

// context
import { CategoriesContext } from "@/contexts/categories.context";

// types
type FormCategoriesProps = {
  open: boolean;
}

const FormCategories: FC<FormCategoriesProps> = ({ open }) => {
  // state
  const { categories } = useContext(CategoriesContext);

  return (
    <div 
      className={ open ? "categories" : "categories--closed" }
    >
      <FormSelect 
        header={ 'Select one or more categories'} 
        options={ categories } 
      />
    </div>
  )
}

export default FormCategories