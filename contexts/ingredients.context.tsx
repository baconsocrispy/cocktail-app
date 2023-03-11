// external imports
import { fetchAllIngredients } from '@/pages/api/cocktail-api';
import { createContext, useEffect, useState, ReactNode } from 'react';

// types
export type Ingredient = {
  abv?: string;
  age?: number;
  brand?: string;
  created_at: string;
  display_name: string;
  id: number;
  product?: string;
  sub_type: string;
  updated_at: string;
}

type IngredientsContextProps = {
  ingredients: Ingredient[]
}

type IngredientsProviderProps = {
  children: ReactNode;
}

// context
export const IngredientsContext = createContext<IngredientsContextProps>({
  ingredients: []
})

// provider
export const IngredientsProvider = ({ children }: IngredientsProviderProps) => {
  // state
  const [ ingredients, setIngredients ] = useState<Ingredient[]>([]);

  // set ingredients
  useEffect(() => {
    const getIngredients = async () => {
      const response = await fetchAllIngredients();
      const { ingredients } = response;
      setIngredients(ingredients)
    }
    getIngredients();
  })

  // export data
  const value = { ingredients }

  return (
    <IngredientsContext.Provider value={ value }>
      { children }
    </IngredientsContext.Provider>
  )
}