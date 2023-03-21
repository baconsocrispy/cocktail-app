// external imports
import { useState, FC, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// context
import { IngredientsContext } from "@/contexts/ingredients.context";
import { ToolsContext } from "@/contexts/tools.context";

// types
import { User } from "@/contexts/user.context";
type CabinetFormData = {
  cabinet: {
    name: string;
    private: boolean;
    user_id: number;
    portion_attributes: Portion[];
    tool_ids: number[];
  }
}

type Portion = {
  ingredient_id: number;
  amount: number;
  unit: string;
}

type CabinetFormProps = {
  user: User;
}

const CabinetForm: FC<CabinetFormProps> = ({ user }) => {
  // state
  const { tools } = useContext(ToolsContext);
  const { ingredients } = useContext(IngredientsContext);
  const [ portions, setPortions ] = useState<Portion[] | null>(null);

  // destructure useForm elements
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CabinetFormData>();

  // handlers
  const handleFormSubmit: SubmitHandler<CabinetFormData> = () => {};
  
  return (
    <form id='cabinet' onSubmit={ handleSubmit(handleFormSubmit) } className='cabinet-form'>
      <div className="cabinet-form__form-element">
        <label htmlFor="name">Cabinet Name</label>
        <input 
          type="text"
          { ...register('cabinet.name', { required: 'Cabinet name is required' })}
        />
      </div>

      <div className="cabinet-form__form-element">
        <label htmlFor="private">Public?</label>
        <input 
          type="checkbox"
          { ...register('cabinet.private', { required: false })}
        />
      </div>

      <input 
        type="hidden"
        { ...register('cabinet.user_id', { required: true })}
        value={ user.id }
      />
    </form>
  )
}

export default CabinetForm