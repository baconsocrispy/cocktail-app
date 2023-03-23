// external imports
import { FC, useContext } from "react";

// context
import { FormContext } from "@/contexts/form.context";

// types
import { CabinetFormData } from "../cabinet-form/cabinet-form.component";
import { Ingredient } from "@/contexts/ingredients.context";
import { UseFormRegister, UseFormUnregister } from "react-hook-form";
export type Portion = {
  ingredient_id: number;
  amount: number;
  unit: string;
}

type PortionFormProps = {
  ingredient: Ingredient;
  index: number;
  register: UseFormRegister<CabinetFormData>;
  unregister: UseFormUnregister<CabinetFormData>;
}

const PortionForm: FC<PortionFormProps> = ({ 
  ingredient, 
  index, 
  register, 
  unregister 
}) => {
  const { removeFormOption } = useContext(FormContext)

  const handleClick = () => {
    removeFormOption(ingredient)
    unregister(`cabinet.portions_attributes.${ index }.ingredient_id`)
  }

  return (
    <div id={ 'portion-' + ingredient.name }>
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