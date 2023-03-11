// external imports
import { useState, MouseEvent } from "react";

// components
import Sidebar from "../sidebar/sidebar.component";
import Ingredients from "../ingredients/ingredients.component";
import Categories from "../categories/categories.component";
import SortBy from "../sort-by/sort-by.component";

// data
enum FILTER_OPTIONS {
  by_ingredient = 'Ingredients',
  by_category = 'Categories',
  by_sort_type = 'Sort By'
}

const FilterOptions = () => { 
  // state
  const options = Object.values(FILTER_OPTIONS);
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const [ sidebarContent, setSidebarContent ] = useState('');

  // handlers
  const handleCloseSidebar = () => setSidebarOpen(false);
  const handleOptionClick = (event: MouseEvent) => {
    const button = event.target as HTMLButtonElement;
    const filterOption = button?.getAttribute('id');

    !sidebarOpen && setSidebarOpen(true);
    filterOption && setSidebarContent(filterOption);
  };

  return (
    <>
      { options.map((option) => (
        <div key={ option } className="filter-options__option">
          <button
            id={ option } 
            className="filter-options__button" 
            onClick={ (event: MouseEvent) => handleOptionClick(event) }
          >
            { option }
          </button>
        </div>
      ))}

      <Sidebar open={ sidebarOpen }>
        <button 
          className="sidebar__close-button" 
          onClick={ handleCloseSidebar }
        >
          Close X
        </button>
        
        {/* sidebar content */}
        {/* { <Ingredients 
            open={ sidebarContent === FILTER_OPTIONS.by_ingredient } 
          /> } */}
        { <Categories 
            open={ sidebarContent === FILTER_OPTIONS.by_category } 
          /> }
        {/* { <SortBy 
            open={ sidebarContent === FILTER_OPTIONS.by_sort_type } 
          /> 
        } */}
      </Sidebar>
    </>
  )
}

export default FilterOptions