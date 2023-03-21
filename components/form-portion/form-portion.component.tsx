// external imports
import { Ingredient } from "@/contexts/ingredients.context";
import { FC } from "react";

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
  return (
    <div>
      <p>{ ingredient.name }</p>
      <input 
        type='hidden'
        { ...register(`cabinet.portion_attributes.${ index }.ingredient_id` )}
        value={ ingredient.id }
      />
      <input
        type='number'
        min='0'
        step='.1'
        { ...register(`cabinet.portion_attributes.${ index }.amount`)}
      />
    </div>
  )
}

export default PortionForm;