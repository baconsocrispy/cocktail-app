// external imports
import { FormContext } from "@/contexts/form.context";
import { Ingredient } from "@/contexts/ingredients.context";
import { FC, useContext } from "react";

import { UseFormRegister } from "react-hook-form";

import { CabinetFormData } from "../cabinet-form/cabinet-form.component";

// types
export type Portion = {
  ingredient_id: number;
  amount: number;
  unit: string;
}

type PortionFormProps = {
  ingredient: Ingredient;
  index: number;
  register: UseFormRegister<CabinetFormData>;
}

const PortionForm: FC<PortionFormProps> = ({ ingredient, index, register }) => {
  const { removeFormOption } = useContext(FormContext)

  const handleClick = () => removeFormOption(ingredient)

  return (
    <div>
      <p>{ ingredient.name }</p>
      <input 
        type='hidden'
        { ...register(`cabinet.portions_attributes.${ index }.ingredient_id` )}
        value={ ingredient.id }
      />
      <button onClick={ handleClick }>X</button>
    </div>
  )
}

export default PortionForm;