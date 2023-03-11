// types
import { Category } from "@/contexts/categories.context";
import { Ingredient } from "@/contexts/ingredients.context";
import { Recipe } from "@/contexts/recipes.context";

export type RecipesAPI = {
  recipes: Recipe[];
  recipeCount: number;
}

export type CategoriesAPI = {
  categories: Category[]
}

export type IngredientsAPI = {
  ingredients: Ingredient[]
}

// api calls
export const fetchAllRecipes = async () => {
  const response = await fetch('http://localhost:3001/recipes');
  const recipes: RecipesAPI = await response.json();
  return recipes
}

export const fetchAllCategories = async () => {
  const response = await fetch('http://localhost:3001/categories');
  const categories: CategoriesAPI = await response.json();
  return categories
}

export const fetchAllIngredients = async () => {
  const response = await fetch('http://localhost:3001/ingredients');
  const ingredients: IngredientsAPI = await response.json();
  return ingredients
}

