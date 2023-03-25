// library imports
import { ChangeEvent, useContext, useState, FormEvent } from "react"

// context 
import { FilteringContext } from "@/contexts/filtering.context";

const Search = () => {
  // state
  const [ keyword, setKeyword ] = useState<string>('');
  const { updateKeyword } = useContext(FilteringContext);

  // handlers
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => setKeyword(event.target.value)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateKeyword(keyword);
  }

  return (
    <form 
      className="search"
      onSubmit={ handleSubmit }
    >
      <label htmlFor="search">Keyword</label>
      <input 
        className='search__input' 
        type='search' 
        name='search'
        onChange={ handleChange }
        value={ keyword }
      />
      <button 
        type='submit' 
        className="search__button util-remove-button-styles"
      >
        Search
      </button>
    </form>
  )
}

export default Search