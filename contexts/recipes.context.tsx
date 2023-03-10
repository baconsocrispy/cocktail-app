// external imports 
import { ReactNode, createContext, useState, useEffect } from 'react';

// api
import { fetchAllRecipes } from '@/pages/api/cocktail-api';

//types
import { Category } from './categories.context';
import { Ingredient } from './ingredients.context';

type Step = {
  description?: string;
  id: number;
  ingredient_id: number;
  name: string;
}

type Tool = {
  name: string;
}

type User = {
  email: string;
}

type Recipe = {
  categories: Category[];
  description?: string;
  ingredients: Ingredient[];
  name: string;
  steps: Step[];
  tools: Tool[];
  users: User[];
}

export type RecipesAPI = {
  recipes: Recipe[]
  recipeCount: number;
}

type RecipesProviderProps = {
  children: ReactNode;
  recipes: Recipe[],
  recipeCount: number;
}

// context
export const RecipesContext = createContext<RecipesAPI>({
  recipes: [],
  recipeCount: 0
})

// provider
export const RecipesProvider = ({ children, recipes, recipeCount }: RecipesProviderProps) => {
  // initial state (set via Next.js getInitialState method)
  const [ state, setState ] = useState({ recipes, recipeCount })

  const updateRecipes = (recipes: Recipe[], recipeCount: number) => {
    setState({ recipes: recipes, recipeCount: recipeCount })
  };

  const value = { recipes, recipeCount, updateRecipes };

  return (
    <RecipesContext.Provider value={ value }>
      { children }
    </RecipesContext.Provider>
  )
}
