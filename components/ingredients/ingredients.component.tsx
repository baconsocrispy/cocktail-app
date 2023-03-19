// external imports
import { FC, useContext, useState, useEffect } from "react"

// components
import Select from "../select/select.component";

// context
import { Ingredient, IngredientsContext } from "@/contexts/ingredients.context";
import { UserContext } from "@/contexts/user.context";
import { fetchCabinetIngredients } from "@/pages/api/cocktail-api";

// types
type IngredientsProps = {
  open: boolean;
  cabinetId?: number | null;
}

const Ingredients: FC<IngredientsProps> = ({ open, cabinetId }) => {
  // state
  const { user } = useContext(UserContext);
  const { ingredients, ingredientTypes } = useContext(IngredientsContext);
  const [ cabinetIngredients, setCabinetIngredients ] = useState<Ingredient[]>(ingredients)

  const handleResetIngredients = () => setCabinetIngredients(ingredients); 

  const handleUpdateIngredients = async (cabinetId: number) => {
    const { ingredients } = await fetchCabinetIngredients(cabinetId);
    setCabinetIngredients(ingredients)
  }

  useEffect(() => {
    cabinetId ? 
      handleUpdateIngredients(cabinetId) :
      setCabinetIngredients(ingredients)
  }, [ cabinetId, ingredients ])

  return (
    <div className={ open ? 'ingredients ingredients--open' : 'ingredients'}>
      <ul>
        <li onClick={ handleResetIngredients }>All Ingredients</li>
        { user?.cabinets.map((cabinet) => (
          <li 
            key={ cabinet.id }
            onClick={ () => handleUpdateIngredients(cabinet.id) }
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
            cabinetIngredients.filter((ingredient) => ingredient.type === type) 
          }  
        />
      ))}
    </div>
  )
}

export default Ingredients