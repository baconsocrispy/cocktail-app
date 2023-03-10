// components
import FilterOptions from "../filter-options/filter-options.component";

const FilterBar = () => {
  return (
    <div className='filterbar'>
      <FilterOptions />
      <div className="filterbar__option--search">
        <label htmlFor="search">Keyword</label>
        <input className='filterbar__search' type='search' name='search'/>
      </div>
      <div className="filterbar__option--reset">
        <button className="reset">
          Reset
        </button>
      </div>
    </div>
  )
}

export default FilterBar