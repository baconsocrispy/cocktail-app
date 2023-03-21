// external imports

// components
import FormOptions from "../form-options/form-options.component";

const FormBar = () => {
  return (
    <div className='formbar'>
      <FormOptions />
      <div className="formbar__option--search">
        <label htmlFor="search">Quick Add</label>
        <input className='formbar__search' type='search' name='search'/>
      </div>
    </div>
  )
}

export default FormBar