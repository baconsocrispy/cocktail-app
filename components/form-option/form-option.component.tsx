// external imports
import { FC, useState, useEffect, useContext } from "react";

// context
import { FormContext } from "@/contexts/form.context";

// types
import { Category } from "@/contexts/categories.context";
import { Ingredient } from "@/contexts/ingredients.context";
import { Tool } from "@/contexts/tools.context";

type FormOptionProps = {
  option: Ingredient | Tool | Category;
}

const FormOption: FC<FormOptionProps> = ({ option }) => {
  // state
  const [ selected, setSelected ] = useState(false);
  const { 
    formOptions, 
    addFormOption, 
    removeFormOption, 
  } = useContext(FormContext);
  
  // initialize options as selected for edit form
  useEffect(() => {
    switch (option.class.toLowerCase()) {
      case 'category':
        if (formOptions.formCategories.some(
          (category) => category.id === option.id
        )) {
          setSelected(true);
        } else {
          setSelected(false);
        }
        break;
      case 'ingredient':
        if (formOptions.formPortions.some(
          (portion) => portion.ingredient_id === option.id
        )) {
          setSelected(true);
        } else {
          setSelected(false);
        }
        break;
      case 'tool':
        if (formOptions.formTools.some(
          (tool) => tool.id === option.id
        )) {
          setSelected(true);
        } else {
          setSelected(false)
        }
        break;
    }
  }, [ formOptions, option ])

  // handlers
  const handleClick = () => {
    selected ? removeFormOption(option) : addFormOption(option);
    setSelected(!selected);
  }

  return (
    <li 
      role='option'
      aria-selected={ selected }
      className={ 
        selected ? 'form-option form-option--selected' : 'form-option' 
      }
      onClick={ handleClick }
    >
      { option.name }
    </li>
  )
}

export default FormOption