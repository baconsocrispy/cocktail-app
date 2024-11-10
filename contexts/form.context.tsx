// external imports 
import { createContext, ReactNode, useState } from "react";


// types
import { Category } from "./categories.context";
import { Ingredient } from "./ingredients.context";
import { Portion } from "@/components/form-portion/form-portion.component";
import { Tool } from "./tools.context";

type FormOptions = {
  formCategories: Category[];
  formPortions: Portion[];
  formTools: Tool[];
};

type FormOption = Category | Ingredient | Portion | Tool;

type FormContextProps = {
  formOptions: FormOptions;
  addFormOption: Function;
  removeFormOption: Function;
  resetFormOptions: Function;
  emptyFormOptions: Function;
};

type FormProviderProps = {
  children: ReactNode;
};

// context
export const FormContext = createContext<FormContextProps>({
  formOptions: {
    formCategories: [],
    formPortions: [],
    formTools: []
  },
  addFormOption: () => {},
  removeFormOption: () => {},
  resetFormOptions: () => {},
  emptyFormOptions: () => {}
});

// provider
export const FormProvider = ({ children }: FormProviderProps) => {
  // initial state
 const emptyForm: FormOptions = {
  formCategories: [],
  formPortions: [],
  formTools: []
 };

 // type guards
  const isPortion = (object: FormOption): object is Portion => {
    return (
      (object as Portion).class === 'Portion'
    )
  };

  const isIngredient = (object: FormOption): object is Ingredient => {
    return (
      (object as Ingredient).class === 'Ingredient'
    )
  };

 const [ formOptions, setFormOptions ] = useState<FormOptions>(emptyForm)

  // actions
  const addFormOption = (option: FormOption) => {
    const updatedFormOptions = { ...formOptions };

    switch (option.class.toLowerCase()) {
      case 'category':
        updatedFormOptions.formCategories.push(option as Category);
        break;
      case 'ingredient':
        if (isIngredient(option)) {
          const emptyPortion: Portion = { 
            amount: 0,
            class: 'Portion', 
            ingredient_id: option.id, 
            name: option.name,
            type: option.type, 
            unit: '' 
          };
          updatedFormOptions.formPortions.push(emptyPortion);
        }
        break;
      case 'portion':
        updatedFormOptions.formPortions.push(option as Portion);
        break;
      case 'tool':
        updatedFormOptions.formTools.push(option as Tool);
        break;
    } 
    setFormOptions(updatedFormOptions);
  };

  const removeFormOption = (option: FormOption) => {
    const updatedFormOptions: FormOptions = { ...formOptions };

    switch (option.class.toLowerCase()) {
      case 'category':
        const formCategories = updatedFormOptions.formCategories.filter(
          (category) => category.id !== option.id
        );
        updatedFormOptions.formCategories = formCategories;
        break;
      case 'ingredient':
        const portions = updatedFormOptions.formPortions.filter(
          ((portion) => portion.ingredient_id !== option.id)
        );
        updatedFormOptions.formPortions = portions;
        break;
      case 'portion':
        if (isPortion(option)) {
          const formPortions = updatedFormOptions.formPortions.filter(
            ((portion) => portion.ingredient_id !== option.ingredient_id)
          );
          updatedFormOptions.formPortions = formPortions;
        }
      case 'tool':
        const formTools = updatedFormOptions.formTools.filter(
          (tool) => tool.id !== option.id
        );
        updatedFormOptions.formTools = formTools;
        break;
    }
    
    setFormOptions(updatedFormOptions);
  };

  const resetFormOptions = () => {
    setFormOptions(emptyForm);
  };

  const emptyFormOptions = () => {
    return (
      formOptions.formCategories.length === 0 &&
      formOptions.formPortions.length ===0 &&
      formOptions.formTools.length === 0
    )
  };

  // export data
  const value = { 
    formOptions, 
    addFormOption, 
    removeFormOption,
    resetFormOptions,
    emptyFormOptions
  };

  return (
    <FormContext.Provider value={ value }>
      { children }
    </FormContext.Provider>
  );
};