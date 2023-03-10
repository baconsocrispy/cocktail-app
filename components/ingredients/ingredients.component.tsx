// this will take a json object of all the current cabinet ingredients
// and display them in the correct select 

// components
import IngredientSelect from "../ingredient-select/ingredient-select.component"

const ingredients = [
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


const Ingredients = () => {

  return (
    <div className='ingredients'>
      <h3 className="ingredients__header">Current Cabinet</h3>
      <IngredientSelect ingredients={ ingredients } header={ 'Spirits' }/>
      <IngredientSelect ingredients={ ingredients } header={ 'Modifiers' } />
      <IngredientSelect ingredients={ ingredients } header={ 'Sugars' } />
      <IngredientSelect ingredients={ ingredients } header={ 'Garnishes' } />
    </div>
  )
}

export default Ingredients