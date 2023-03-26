// library imports
import { FC, useContext, useState, useEffect, MouseEvent } from "react";

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
import Dropdown from "../dropdown/dropdown.component";
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
  const updateIngredients = async (cabinetId: number | null) => {
    if (jwt) {
      cabinetId ? 
        await updateCurrentCabinet(cabinetId, jwt) :
        await updateCurrentCabinet(null, jwt)
      getUser();
      resetFilterOptions();
    }
  }

  return (
    <div className={ open ? 'ingredients' : 'ingredients--closed'}>
      <Dropdown
        defaultItemName="All Ingredients"
        header='Cabinet' 
        objects={ user?.cabinets }
        selectedObjectId={ user?.current_cabinet_id } 
        onClick={ (cabinetId: number | null) => updateIngredients(cabinetId) }
      />

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