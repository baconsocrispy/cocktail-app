// external imports
import { FC, useContext } from "react";

// context
import { FormContext } from "@/contexts/form.context";

const FormPortions: FC = () => {
  // state
  const { formOptions } = useContext(FormContext);

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        { formOptions.formIngredients.map((ingredient) => (
          <li key={ ingredient.id }>{ ingredient.name }</li>
        ))}
      </ul>
    </div>
  )
}

export default FormPortions