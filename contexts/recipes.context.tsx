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
}

// context
export const RecipesContext = createContext<RecipesAPI>({
  recipes: [],
  recipeCount: 0
})

// provider
export const RecipesProvider = ({ children }: RecipesProviderProps) => {
  // initial state
  const [ recipes, setRecipes ] = useState<Recipe[]>([])
  const [ recipeCount, setRecipeCount ] = useState<number>(0)

  // api request
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetchAllRecipes();
      setRecipes(response.recipes)
      setRecipeCount(response.recipeCount)
    }
    getRecipes();
  })

  const value = { recipes, recipeCount }

  return (
    <RecipesContext.Provider value={ value }>
      { children }
    </RecipesContext.Provider>
  )
}
