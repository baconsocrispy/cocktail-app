// external imports
import { FC, useContext, useEffect } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

// context
import { FormContext } from "@/contexts/form.context";

// types
import { CabinetFormData } from "../cabinet-form/cabinet-form.component";
import { Ingredient } from "@/contexts/ingredients.context";
import { UseFormRegister, UseFormUnregister } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  // state
  const { removeFormOption } = useContext(FormContext)

  // unregister portion when removed from cabinet
  useEffect(() => {
    return () => {
      unregister(`cabinet.portions_attributes.${ index }.ingredient_id`)
    }
  }, [ index, unregister ])

  // handlers
  const handleClick = () => {
    removeFormOption(ingredient)
  }

  return (
    <li 
      id={ 'portion-' + ingredient.name }
      className='portion'
    >
      <p className="portion__name">{ ingredient.name }</p>
      <input 
        type="number"
        className="portion__input"
        { ...register(`cabinet.portions_attributes.${ index }.amount` )}
        value={ 5 }
      />
      <input 
        type="text"
        className="portion__input"
        { ...register(`cabinet.portions_attributes.${ index }.unit` )}
        value={ 'Oz' }
      />
      <input 
        type='hidden'
        { ...register(`cabinet.portions_attributes.${ index }.ingredient_id` )}
        value={ ingredient.id }
      />
      <button 
        onClick={ handleClick }
        className="portion__remove-button util-default-button"
      >
        <FontAwesomeIcon icon={ faTrashCan } />
      </button>
    </li>
  )
}

export default PortionForm;