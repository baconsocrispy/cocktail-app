// external imports
import { FC, useState } from "react"

// components
import Ingredients from "../ingredients/ingredients.component";
import Sidebar from "../sidebar/sidebar.component";

// types
type FilterbarProps = {
  options: string[];
}

const FilterBar: FC<FilterbarProps> = ({ options }) => {
  // state
  const [ sidebarOpen, setSidebarOpen ] = useState(false);

  // handlers
  const handleClick = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className='filterbar'>
      <div className="filterbar__option">
        <button className="filterbar__button" onClick={ handleClick }>
          Ingredients
        </button>
      </div>
      <div className="filterbar__option">
        <button className="filterbar__button">
          Categories
        </button>
      </div>
      <div className="filterbar__option">
        <button className="filterbar__button">
          Sort By
        </button>
      </div>
      <div className="filterbar__option--search">
        <label htmlFor="search">Keyword</label>
        <input className='filterbar__search' type='search' name='search'/>
      </div>
      <div className="filterbar__option--reset">
        <button className="reset">
          Reset
        </button>
      </div>
      <Sidebar open={ sidebarOpen }>
        <Ingredients />
      </Sidebar>
    </div>
  )
}

export default FilterBar