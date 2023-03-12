// external imports
import { useContext } from "react";

// components
import FilterOptions from "../filter-options/filter-options.component";

// context
import { FilteringContext } from "@/contexts/filtering.context";


const FilterBar = () => {
  // state
  const { resetFilterOptions } = useContext(FilteringContext)

  // handlers
  const handleResetClick = () => resetFilterOptions();

  return (
    <div className='filterbar'>
      <FilterOptions />
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

export default FilterBar