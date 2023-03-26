// library imports
import { FC, useContext, useState, useEffect } from "react";

// components
import Select from "../select/select.component";

// context
import { FilteringContext } from "@/contexts/filtering.context";
import { IngredientsContext } from "@/contexts/ingredients.context";
import { UserContext } from "@/contexts/user.context";

// api
import { updateCurrentCabinet } from "@/pages/api/cocktail-api";

// types
import { Ingredient } from "@/contexts/ingredients.context";
type IngredientsProps = {
  open: boolean;
}

const Ingredients: FC<IngredientsProps> = ({ open }) => {
  // state
  const { user, jwt, userIngredients, getUser } = useContext(UserContext);
  const { ingredients, ingredientTypes } = useContext(IngredientsContext);
  const { resetFilterOptions } = useContext(FilteringContext);
  const [ cabinetIngredients, setCabinetIngredients ] = useState<Ingredient[]>(ingredients);

  // set initial ingredients && rerender when current_cabinet_id changes
  useEffect(() => {
    user?.current_cabinet_id ? 
      setCabinetIngredients(userIngredients) :
      setCabinetIngredients(ingredients)
  }, [ user, userIngredients, ingredients ])

  // handlers
  const handleResetIngredients = async () => {
    jwt && await updateCurrentCabinet(null, jwt)
    setCabinetIngredients(ingredients); 
    resetFilterOptions();
  }

  const handleUpdateCabinet = (cabinetId: number) => {
    jwt && updateCurrentCabinet(cabinetId, jwt);
    getUser();
    resetFilterOptions();
  }

  return (
    <div className={ open ? 'ingredients' : 'ingredients--closed'}>
      <ul>
        <li onClick={ handleResetIngredients }>All Ingredients</li>
        
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
            cabinetIngredients.filter((ingredient) => ingredient.type === type) 
          }  
        />
      ))}
    </div>
  )
}

export default Ingredients