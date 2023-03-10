// external imports
import { FC, useState } from "react"
import Categories from "../categories/categories.component";

// components
import Ingredients from "../ingredients/ingredients.component";
import Sidebar from "../sidebar/sidebar.component";

const FilterBar: FC = () => {
  // state
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const [ sidebarContent, setSidebarContent ] = useState('')

  // handlers
  const handleCloseSidebar = () => setSidebarOpen(false);
  const handleOptionClick = (option: string) => {
    !sidebarOpen && setSidebarOpen(true)
    option === 'ingredients' && setSidebarContent('ingredients')
    option === 'categories' && setSidebarContent('categories')
  };

  return (
    <div className='filterbar'>
      <div className="filterbar__option">
        <button 
          className="filterbar__button" 
          onClick={ () => handleOptionClick('ingredients') }
        >
          Ingredients
        </button>
      </div>
      <div className="filterbar__option">
        <button 
          className="filterbar__button"
          onClick={ () => handleOptionClick('categories') }
        >
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
        <button 
          className="sidebar__close-button" 
          onClick={ handleCloseSidebar }
        >
          Close X
        </button>
       
        { <Ingredients open={ sidebarContent ==='ingredients' } /> }
        { <Categories open={ sidebarContent ==='categories' } /> }
      </Sidebar>
    </div>
  )
}

export default FilterBar