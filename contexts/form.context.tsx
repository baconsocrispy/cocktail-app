// external imports 
import { createContext, ReactNode, useState } from "react";
import { Category } from "./categories.context";

// types
import { Tool } from "./tools.context";
import { Ingredient } from "./ingredients.context";

export type Portion = {
  ingredientId: number;
  amount: number;
  unit: string;
}

type FormOptions = {
  formCategories: number[];
  formIngredients: number[];
  formTools: number[];
}

type FormOption = {
  class: string;
  id: number;
  name: string;
  option: Category | Ingredient | Tool;
}

type FormContextProps = {
  formOptions: FormOptions;
  addFormOption: Function;
  removeFormOption: Function;
  resetFormOptions: Function;
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
  resetFormOptions: () => {}
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
        updatedFormOptions.formCategories.push(option.id)
        break;
      case 'ingredient':
        updatedFormOptions.formIngredients.push(option.id)
        break;
      case 'tool':
        updatedFormOptions.formTools.push(option.id)
        break;
    }
    
    setFormOptions(updatedFormOptions);
  }

  const removeFormOption = (option: FormOption) => {
    const updatedFormOptions: FormOptions = { ...formOptions }

    switch (option.class.toLowerCase()) {
      case 'category':
        const formCategories = updatedFormOptions.formCategories.filter(
          (id) => id !== option.id
        )
        updatedFormOptions.formCategories = formCategories;
        break;
      case 'ingredient':
        const formIngredients = updatedFormOptions.formIngredients.filter(
          (id) => id !== option.id
        )
        updatedFormOptions.formIngredients = formIngredients;
        break;
      case 'tool':
        const formTools = updatedFormOptions.formTools.filter(
          (id) => id !== option.id
        )
        updatedFormOptions.formTools = formTools;
        break;
    }
    
    setFormOptions(updatedFormOptions);
  }

  const resetFormOptions = () => setFormOptions(emptyForm)

  // export data
  const value = { 
    formOptions, 
    addFormOption, 
    removeFormOption, 
    resetFormOptions 
  }

  return (
    <FormContext.Provider value={ value }>
      { children }
    </FormContext.Provider>
  )
}