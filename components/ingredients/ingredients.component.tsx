// this will take a json object of all the current cabinet ingredients
// and display them in the correct select 

// external imports
import { FC } from "react"

// components
import Select from "../select/select.component";

// types
type IngredientsProps = {
  open: boolean;
}

const ingredients = [
  'fish',
  'booze',
  'crayon,',
  'mouse',
  'finger',
  'pen',
  'pad',
  'paper',
  'speaker',
  'fish',
  'booze',
  'crayon,',
  'mouse',
  'finger',
  'pen',
  'pad',
  'paper',
  'speaker',
  'fish',
  'booze',
  'crayon,',
  'mouse',
  'finger',
  'pen',
  'pad',
  'paper',
  'speaker',
  'fish',
  'booze',
  'crayon,',
  'mouse',
  'finger',
  'pen',
  'pad',
  'paper',
  'speaker',
  'fish',
  'booze',
  'crayon,',
  'mouse',
  'finger',
  'pen',
  'pad',
  'paper',
  'speaker'
]


const Ingredients: FC<IngredientsProps> = ({ open }) => {

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