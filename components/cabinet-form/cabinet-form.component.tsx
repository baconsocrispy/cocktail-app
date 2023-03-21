// external imports
import { FC, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// context
import { FormContext } from "@/contexts/form.context";

// types
import { Portion } from "@/contexts/form.context";
type CabinetFormData = {
  cabinet: {
    name: string;
    private: boolean;
    user_id: number;
    portion_attributes: Portion[];
    tool_ids: number[];
  }
}

type CabinetFormProps = {
  userId: number;
}

const CabinetForm: FC<CabinetFormProps> = ({ userId }) => {
  // state
  const { formOptions } = useContext(FormContext);

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
        value={ userId }
      />
    </form>
  )
}

export default CabinetForm