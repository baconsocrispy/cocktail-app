// external imports
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

// context
import { FormContext } from "@/contexts/form.context";
import { Cabinet, UserContext } from "@/contexts/user.context";

// api
import { createNewCabinet, updateCabinet } from "@/pages/api/cocktail-api";

// types
import PortionForm, { Portion } from "../form-portion/form-portion.component";

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
  const [ nameField, setNameField ] = useState('Untitled Cabinet');

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
      cabinet.portions.map((portion) => addFormOption(portion));
      cabinet.tools.map((tool) => addFormOption(tool));
      setNameField(cabinet.name);
    }
  }, [])

  // handlers
  const handleFormSubmit: SubmitHandler<CabinetFormData> = async (formData: CabinetFormData) => {
    console.log('Test')
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
    const name = event.target?.value;
    setNameField(name);
  }

  return (
    <form 
      id='cabinet'
      onSubmit={ handleSubmit(handleFormSubmit) } 
      className='cabinet-form'
    >
      <div className="cabinet-form__form-element">
        <label 
          htmlFor="name"
          className="cabinet-form__label"
        >
          Name
        </label>

        <input 
          type="text"
          className="cabinet-form__input"
          { ...register('cabinet.name', { required: 'Cabinet name is required' })}
          onChange={ handleNameChange }
          value={ nameField }
        />
      </div>

      {/* <div className="cabinet-form__form-element">
        <label htmlFor="private">Public?</label>
        <input 
          type="checkbox"
          { ...register('cabinet.private', { required: false })}
        />
      </div> */}

      <div className="cabinet-form__ingredients">
        <h3 className="cabinet-form__sub-header">Ingredients</h3>
        <ul className="cabinet-form__list">
          { formOptions.formPortions.map((portion) => (
              <PortionForm 
                key={ portion.id } 
                object={ portion } 
                register={ register } 
                unregister={ unregister }
              />))
          }
        </ul>
      </div>

      <div className="cabinet-form__ingredients">
        <h3 className="cabinet-form__sub-header">Tools</h3>
        <ul className="cabinet-form__list">
          { formOptions.formTools.map((tool) => (
              <li key={ tool.id }>
                 <input 
                  type='checkbox'
                  { ...register(`cabinet.tool_ids.${ tool.id }`, { required: 'Cabinet name is required' })}
                  value={ tool.id }
                />
                <label htmlFor={`tool_ids.${ tool.id }`}>{ tool.name }</label>
              </li>
            ))
          }
        </ul>
      </div>

      <input 
        type="hidden"
        { ...register('cabinet.user_id', { required: true })}
        value={ userId }
      />

      <button 
        type='submit'
        className="util-default-button cabinet-form__button"
      >
        Submit
      </button>
    </form>
  )
}

export default CabinetForm