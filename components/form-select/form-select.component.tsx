// external imports
import { FC } from "react";

// components
import FormOption from "../form-option/form-option.component";

// types
import { Ingredient } from "@/contexts/ingredients.context"
import { Tool } from "@/contexts/tools.context"
import { Category } from "@/contexts/categories.context";

type FormSelectProps = {
  header: string;
  options: Ingredient[] | Tool[] | Category[];
}

const FormSelect: FC<FormSelectProps> = ({ 
  header, options 
}) => {

  return (
    <div role="listbox" className="form-select">
      <h4 className="form-select__header">{ header }</h4>
      <ul role="list" className="form-select__options">
        { options.map((option) => (
          <FormOption option={ option } key={ option.id } />
        ))}
      </ul>
    </div>
  )
}

export default FormSelect