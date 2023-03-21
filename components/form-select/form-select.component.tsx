// external imports
import { FC, MouseEvent } from "react";

// components
import FormOption from "../form-option/form-option.component";

// types
import { Ingredient } from "@/contexts/ingredients.context"
import { Tool } from "@/contexts/tools.context"

type FormSelectProps = {
  options: Ingredient[] | Tool[];
  handleOptionClick: (event: MouseEvent<HTMLElement>) => void;
}

const FormSelect: FC<FormSelectProps> = ({ 
  options, handleOptionClick 
}) => {

  return (
    <div role="listbox" className="">
      <ul role="list" className="">
        { options.map((option) => (
          <FormOption 
            option={ option } 
            key={ option.id } 
            onClick={ handleOptionClick } 
          />
        ))}
      </ul>
    </div>
  )
}

export default FormSelect