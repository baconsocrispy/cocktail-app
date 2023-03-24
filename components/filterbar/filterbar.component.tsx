// components
import FilterOptions from "../filter-options/filter-options.component";
import Search from "../search/search.component";

const FilterBar = () => {
  return (
    <div className='filterbar'>
      <FilterOptions />
      <Search />
    </div>
  )
}

export default FilterBar