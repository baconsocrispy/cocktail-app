// external imports
import { useState, MouseEvent } from "react";

// components
import Sidebar from "../sidebar/sidebar.component";
import FormIngredients from "../form-ingredients/form-ingredients.component";
import FormCategories from "../form-categories/form-categories.component";
import FormTools from "../form-tools/form-tools.component";

// data
enum FORM_OPTIONS {
  ingredients = 'Ingredients',
  categories = 'Categories',
  tools = 'Tools'
}

const FormOptions = () => { 
  // state
  const options = Object.values(FORM_OPTIONS);
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
        { <FormIngredients 
            open={ sidebarContent === FORM_OPTIONS.ingredients }
          /> }
        { <FormCategories 
            open={ sidebarContent === FORM_OPTIONS.categories } 
          /> }
        { <FormTools 
            open={ sidebarContent === FORM_OPTIONS.tools } 
          /> 
        }
      </Sidebar>
    </>
  )
}

export default FormOptions