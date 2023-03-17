// external imports
import { FC, useContext } from "react"

// components
import Select from "../select/select.component";

// context
import { IngredientsContext } from "@/contexts/ingredients.context";
import { UserContext } from "@/contexts/user.context";

// types
type IngredientsProps = {
  open: boolean;
}

const Ingredients: FC<IngredientsProps> = ({ open }) => {
  // state
  const { user } = useContext(UserContext);
  const { ingredients, ingredientTypes } = useContext(IngredientsContext);

  const handleUpdateCabinet = async (cabinetId: number) => {
  }

  return (
    <div className={ open ? 'ingredients ingredients--open' : 'ingredients'}>
      <ul>
        <li>All Ingredients</li>
        { user?.cabinets.map((cabinet) => (
          <li 
            key={ cabinet.id }
            onClick={ () => handleUpdateCabinet(cabinet.id) }
          >
            { cabinet.name }
          </li>
        ))}
      </ul>

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