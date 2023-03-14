// external imports 
import { ReactNode, createContext, useState } from 'react';

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

export type Recipe = {
  categories: Category[];
  description?: string;
  id: number;
  ingredients: Ingredient[];
  name: string;
  steps: Step[];
  tools: Tool[];
  users: User[];
}

export type RecipesContextProps = {
  recipes: Recipe[]
  recipeCount: number;
  updateRecipes: Function;
}

type RecipesProviderProps = {
  children: ReactNode;
  recipes: Recipe[],
  recipeCount: number;
}

// context
export const RecipesContext = createContext<RecipesContextProps>({
  recipes: [],
  recipeCount: 0,
  updateRecipes: () => {}
})

// provider
export const RecipesProvider = (
  { children, recipes, recipeCount }: RecipesProviderProps
) => {
  // initial state (set via Next.js getInitialState method)
  const [ state, setState ] = useState({ recipes, recipeCount })

  // actions
  const updateRecipes = (recipes: Recipe[], recipeCount: number) => {
    setState({ recipes: recipes, recipeCount: recipeCount })
  };

  // export data
  const value = { recipes: state.recipes, recipeCount: state.recipeCount, updateRecipes };

  return (
    <RecipesContext.Provider value={ value }>
      { children }
    </RecipesContext.Provider>
  )
}
