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
  const { ingredients } = useContext(IngredientsContext);

  return (
    <div className={ open ? 'ingredients ingredients--open' : 'ingredients'}>
      <h3 className="ingredients__header">Current Cabinet</h3>
      <Select options={ ingredients } header={ 'Spirits' }/>
      <Select options={ ingredients } header={ 'Modifiers' } />
      <Select options={ ingredients } header={ 'Sugars' } />
      <Select options={ ingredients } header={ 'Garnishes' } />
    </div>
  )
}

export default Ingredients