// external imports
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

// context
import { FormContext } from "@/contexts/form.context";

// types
import PortionForm, { Portion } from "../form-portion/form-portion.component";
import { createNewCabinet, updateCabinet } from "@/pages/api/cocktail-api";
import { Cabinet, UserContext } from "@/contexts/user.context";

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
  cabinet?: Cabinet;
}

const CabinetForm: FC<CabinetFormProps> = ({ userId, cabinet }) => {
  // state
  const [ loading, setLoading ] = useState(true);
  const [ nameField, setNameField ] = useState('')

  const { 
    formOptions, 
    addFormOption, 
    resetFormOptions,
    emptyFormOptions
  } = useContext(FormContext);
  const { jwt, getUser } = useContext(UserContext);

  // navigation
  const router = useRouter();

  // destructure useForm elements
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CabinetFormData>();

  // load cabinet elements on Edit page
  useEffect(() => {
    if (cabinet && emptyFormOptions()) {
      cabinet.ingredients.map((ingredient) => addFormOption(ingredient));
      cabinet.tools.map((tool) => addFormOption(tool));
      setNameField(cabinet.name)
    }
  }, [ ])

  // handlers
  const handleFormSubmit: SubmitHandler<CabinetFormData> = async (formData: CabinetFormData) => {
    if (jwt) {
      const response = cabinet ? 
      await updateCabinet(cabinet.slug, formData, jwt) :
      await createNewCabinet(formData, jwt)

      if (response.status.code === 200) {
        resetFormOptions();
        reset();
        await getUser();
        router.push('/cabinets');
      }
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target?.value
    setNameField(name)
  }

  return (
    <form 
      id='cabinet'
      onLoad={ () => setLoading(false)} 
      onSubmit={ handleSubmit(handleFormSubmit) } 
      className='cabinet-form'
    >
      <div className="cabinet-form__form-element">
        <label htmlFor="name">Cabinet Name</label>
        <input 
          type="text"
          { ...register('cabinet.name', { required: 'Cabinet name is required' })}
          onChange={ handleNameChange }
          value={ nameField }
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
            unregister={ unregister }
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