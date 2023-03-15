// types
import { Category } from "@/contexts/categories.context";
import { FilterOptions } from "@/contexts/filtering.context";
import { Ingredient } from "@/contexts/ingredients.context";
import { Recipe } from "@/contexts/recipes.context";
import { SortOption } from "@/contexts/sort-by.context";

export type RecipesAPI = {
  recipes: Recipe[];
  recipeCount: number;
}

export type CategoriesAPI = {
  categories: Category[];
}

export type IngredientsAPI = {
  ingredients: Ingredient[];
  ingredientTypes: string[];
}

export type SortOptionAPI = {
  sortOptions: SortOption[];
}

// api calls
export const fetchAllRecipes = async () => {
  const response = await fetch('http://localhost:3001/recipes');
  const recipes: RecipesAPI = await response.json();
  return recipes;
}

export const filterRecipes = async (
  filterOptions: FilterOptions, 
  page: number
) => {
  // returns URLSearchParams object
  const params = configureURLSearchParams(filterOptions, page); 

  const url = new URL('http://localhost:3001/recipes/search');
  url.search = params.toString();

  const response = await fetch(url);
  const recipes: RecipesAPI = await response.json();
  console.log(recipes)
  return recipes
}

export const fetchAllCategories = async () => {
  const response = await fetch('http://localhost:3001/categories');
  const categories: CategoriesAPI = await response.json();
  return categories;
}

export const fetchAllIngredients = async () => {
  const response = await fetch('http://localhost:3001/ingredients');
  const ingredients: IngredientsAPI = await response.json();
  return ingredients;
}

export const fetchSortOptions = async () => {
  const response = await fetch('http://localhost:3001/sort_options');
  const sortOptions: SortOptionAPI = await response.json();
  return sortOptions;
}

// helpers
const configureURLSearchParams = (
  filterOptions: FilterOptions, 
  page: number
) => {
  const params = new URLSearchParams();

  if (filterOptions.ingredientIds.length > 0) {
    filterOptions.ingredientIds.forEach((id) => {
      params.append('ingredientIds[]', id.toString())
    });
  }

  if (filterOptions.categoryIds.length > 0) {
    filterOptions.categoryIds.forEach((id) => {
      params.append('categoryIds[]', id.toString())
    });
  }

  if (filterOptions.sortOption !== null) {
    params.append('sortOption', filterOptions.sortOption);
  }

  if (filterOptions.keyword !== null) {
    params.append('keyword', filterOptions.keyword);
  }

  params.append('page', page.toString())

  return params 
}