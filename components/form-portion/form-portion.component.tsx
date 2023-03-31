// external imports
import { FC, useContext, useEffect, useState, ChangeEvent } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

// context
import { FormContext } from "@/contexts/form.context";

// types
import { CabinetFormData } from "../cabinet-form/cabinet-form.component";
import { Ingredient } from "@/contexts/ingredients.context";
import { UseFormRegister, UseFormUnregister } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Portion = {
  class: string;
  id: number;
  ingredient_id: number;
  name: string;
  amount: number;
  unit: string;
}

type PortionFormProps = {
  object: Ingredient | Portion;
  register: UseFormRegister<CabinetFormData>;
  unregister: UseFormUnregister<CabinetFormData>;
};

const PortionForm: FC<PortionFormProps> = ({ 
  object, 
  register, 
  unregister 
}) => {
  // type guard
  const isPortion = (object: Portion | Ingredient): object is Portion => {
    return (
      (object as Portion).amount !== undefined && 
      (object as Portion).unit !== undefined
    )
  };

  // state
  const { removeFormOption } = useContext(FormContext);

  const [ amount, setAmount ] = useState<number | string>(
    isPortion(object) ? object.amount : ''
  );

  const [ unit, setUnit ] = useState<string>(
    isPortion(object) ? object.unit : ''
  );

  // unregister portion when removed from cabinet
  // the return function runs on unmount
  useEffect(() => {
    return () => {
      unregister(`cabinet.portions_attributes.${ object.id }.amount`);
      unregister(`cabinet.portions_attributes.${ object.id }.unit`);
      unregister(`cabinet.portions_attributes.${ object.id }.ingredient_id`);
    }
  }, [ object, unregister ])

  // handlers
  const handleClick = () => {
    removeFormOption(object);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const amount = event.target?.value;
    setAmount(parseInt(amount));
  };

  const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const unit = event.target?.value;
    setUnit(unit);
  };

  return (
    <li 
      id={ 'portion-' + object.id }
      className='portion'
    >
      <p className="portion__name">{ object.name }</p>

      <input 
        type="number"
        className="portion__input"
        { ...register(`cabinet.portions_attributes.${ object.id }.amount` )}
        value={ amount }
        onChange={ handleAmountChange }
      />

      <input 
        type="text"
        className="portion__input"
        { ...register(`cabinet.portions_attributes.${ object.id }.unit` )}
        value={ unit }
        onChange={ handleUnitChange }
      />
      
      <input 
        type='hidden'
        { ...register(`cabinet.portions_attributes.${ object.id }.ingredient_id` )}
        value={ isPortion(object) ? object.ingredient_id : object.id }
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