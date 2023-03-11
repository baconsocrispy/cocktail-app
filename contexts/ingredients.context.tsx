// external imports
import { fetchAllIngredients } from '@/pages/api/cocktail-api';
import { createContext, useEffect, useState, ReactNode } from 'react';

// types
export type Ingredient = {
  abv?: string;
  age?: number;
  brand?: string;
  created_at: string;
  name: string;
  id: number;
  product?: string;
  sub_type: string;
  type: string;
  updated_at: string;
}

type IngredientsContextProps = {
  ingredients: Ingredient[],
  ingredientTypes: string[]
}

type IngredientsProviderProps = {
  children: ReactNode;
}

// context
export const IngredientsContext = createContext<IngredientsContextProps>({
  ingredients: [],
  ingredientTypes: []
})

// provider
export const IngredientsProvider = ({ children }: IngredientsProviderProps) => {
  // state
  const [ ingredients, setIngredients ] = useState<Ingredient[]>([]);
  const [ ingredientTypes, setIngredientTypes ] = useState<string[]>([])

  // set ingredients && ingredientTypes
  useEffect(() => {
    const getIngredients = async () => {
      const response = await fetchAllIngredients();
      const { ingredients, ingredientTypes } = response;
      setIngredients(ingredients)
      setIngredientTypes(ingredientTypes)
    }
    getIngredients();
  }, [])

  // export data
  const value = { ingredients, ingredientTypes }

  return (
    <IngredientsContext.Provider value={ value }>
      { children }
    </IngredientsContext.Provider>
  )
}