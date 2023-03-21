// external imports
import { FC, useContext } from "react"

// components
import FormSelect from "../form-select/form-select.component";

// context
import { IngredientsContext } from "@/contexts/ingredients.context";

// types
type FormIngredientsProps = {
  open: boolean;
}

const FormIngredients: FC<FormIngredientsProps> = ({ open }) => {
  // state
  const { ingredients, ingredientTypes } = useContext(IngredientsContext);

  return (
    <div className={ open ? 
      'form-ingredients form-ingredients--open' : 'form-ingredients'
    }>

      { ingredientTypes.map((type) => (
        <FormSelect 
          key={ type } 
          header={ type }
          options={
            ingredients.filter((ingredient) => ingredient.type === type) 
          }  
        />
      ))}
    </div>
  )
}

export default FormIngredients