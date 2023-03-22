// external imports
import { FC, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

// context
import { FormContext } from "@/contexts/form.context";

// types
import PortionForm, { Portion } from "../form-portion/form-portion.component";
import { createNewCabinet } from "@/pages/api/cocktail-api";
import { UserContext } from "@/contexts/user.context";

export type CabinetFormData = {
  cabinet: {
    name: string;
    private: boolean;
    user_id: number;
    portions_attributes: Portion[];
    tool_ids: number[];
  }
}

type CabinetFormProps = {
  userId: number;
}

const CabinetForm: FC<CabinetFormProps> = ({ userId }) => {
  // state
  const { formOptions } = useContext(FormContext);
  const { jwt, getUser } = useContext(UserContext);

  // navigation
  const router = useRouter();

  // destructure useForm elements
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CabinetFormData>();

  // handlers
  const handleFormSubmit: SubmitHandler<CabinetFormData> = async (formData: CabinetFormData) => {
    if (jwt) {
      const response = await createNewCabinet(formData, jwt)
      if (response.status.code === 200) {
        await getUser();
        router.push('/cabinets');
      }
    }
  };
  
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

      <div>
        { formOptions.formIngredients.map((ingredient, index) => (
          <PortionForm 
            key={ ingredient.id } 
            index={ index } 
            ingredient={ ingredient } 
            register={ register } 
          />
        ))}
      </div>

      <input 
        type="hidden"
        { ...register('cabinet.user_id', { required: true })}
        value={ userId }
      />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default CabinetForm