// types
import { Recipe } from "@/contexts/recipes.context";
export type RecipesAPI = {
  recipes: Recipe[];
  recipeCount: number;
}

export const fetchAllRecipes = async () => {
  const response = await fetch('http://localhost:3001/recipes');
  const recipes: RecipesAPI = await response.json();
  return recipes
}

