// external imports 
import { createContext, ReactNode, useState } from "react";


// types
import { Category } from "./categories.context";
import { Tool } from "./tools.context";
import { Ingredient } from "./ingredients.context";

type FormOptions = {
  formCategories: Category[];
  formIngredients: Ingredient[];
  formTools: Tool[];
}

type FormOption = Category | Ingredient | Tool;

type FormContextProps = {
  formOptions: FormOptions;
  addFormOption: Function;
  removeFormOption: Function;
  resetFormOptions: Function;
  emptyFormOptions: Function;
}

type FormProviderProps = {
  children: ReactNode;
}

// context
export const FormContext = createContext<FormContextProps>({
  formOptions: {
    formCategories: [],
    formIngredients: [],
    formTools: []
  },
  addFormOption: () => {},
  removeFormOption: () => {},
  resetFormOptions: () => {},
  emptyFormOptions: () => {}
})

// provider
export const FormProvider = ({ children }: FormProviderProps) => {
  // initial state
 const emptyForm: FormOptions = {
  formCategories: [],
  formIngredients: [],
  formTools: []
 }

 const [ formOptions, setFormOptions ] = useState<FormOptions>(emptyForm)

  // actions
  const addFormOption = (option: FormOption) => {
    const updatedFormOptions = { ...formOptions }

    switch (option.class.toLowerCase()) {
      case 'category':
        updatedFormOptions.formCategories.push(option as Category)
        break;
      case 'ingredient':
        updatedFormOptions.formIngredients.push(option as Ingredient)
        break;
      case 'tool':
        updatedFormOptions.formTools.push(option as Tool)
        break;
    }
    
    setFormOptions(updatedFormOptions);
  }

  const removeFormOption = (option: FormOption) => {
    const updatedFormOptions: FormOptions = { ...formOptions }

    switch (option.class.toLowerCase()) {
      case 'category':
        const formCategories = updatedFormOptions.formCategories.filter(
          (category) => category.id !== option.id
        )
        updatedFormOptions.formCategories = formCategories;
        break;
      case 'ingredient':
        const formIngredients = updatedFormOptions.formIngredients.filter(
          (ingredient) => ingredient.id !== option.id
        )
        updatedFormOptions.formIngredients = formIngredients;
        break;
      case 'tool':
        const formTools = updatedFormOptions.formTools.filter(
          (tool) => tool.id !== option.id
        )
        updatedFormOptions.formTools = formTools;
        break;
    }
    
    setFormOptions(updatedFormOptions);
  }

  const resetFormOptions = () => {
    setFormOptions(emptyForm);
  }

  const emptyFormOptions = () => {
    return (
      formOptions.formCategories.length === 0 &&
      formOptions.formIngredients.length === 0 &&
      formOptions.formTools.length === 0
    )
  }

  // export data
  const value = { 
    formOptions, 
    addFormOption, 
    removeFormOption,
    resetFormOptions,
    emptyFormOptions
  }

  return (
    <FormContext.Provider value={ value }>
      { children }
    </FormContext.Provider>
  )
}