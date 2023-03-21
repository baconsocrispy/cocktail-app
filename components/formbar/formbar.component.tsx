// external imports

// components
import FilterOptions from "../filter-options/filter-options.component";
import FormOptions from "../form-options/form-options.component";



const FormBar = () => {
  // state
  

  // handlers
  const handleResetClick = () => {};

  return (
    <div className='filterbar'>
      <FormOptions />
      <div className="filterbar__option--search">
        <label htmlFor="search">Keyword</label>
        <input className='filterbar__search' type='search' name='search'/>
      </div>
      <div className="filterbar__option--reset">
        <button className="reset" onClick={ handleResetClick }>
          Reset
        </button>
      </div>
    </div>
  )
}

export default FormBar