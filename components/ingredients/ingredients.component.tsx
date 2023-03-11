// external imports
import { FC, useContext } from "react"

// components
import Select from "../select/select.component";

// context
import { IngredientsContext } from "@/contexts/ingredients.context";

// types
type IngredientsProps = {
  open: boolean;
}

const Ingredients: FC<IngredientsProps> = ({ open }) => {
  // state
  const { ingredients, ingredientTypes } = useContext(IngredientsContext);

  return (
    <div className={ open ? 'ingredients ingredients--open' : 'ingredients'}>
      <h3 className="ingredients__header">Current Cabinet</h3>
      { ingredientTypes.map((type) => (
        <Select 
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

export default Ingredients