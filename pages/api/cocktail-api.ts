// types
import { CabinetFormData } from "@/components/cabinet-form/cabinet-form.component";
import { Category } from "@/contexts/categories.context";
import { FilterOptions } from "@/contexts/filtering.context";
import { Ingredient } from "@/contexts/ingredients.context";
import { Recipe } from "@/contexts/recipes.context";
import { SortOption } from "@/contexts/sort-by.context";
import { Tool } from "@/contexts/tools.context";
import { User } from "@/contexts/user.context";

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

export type ToolsAPI = {
  tools: Tool[];
}

// recipes api
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
  return recipes
}

// categories api
export const fetchAllCategories = async () => {
  const response = await fetch('http://localhost:3001/categories');
  const categories: CategoriesAPI = await response.json();
  return categories;
}

// ingredients api
export const fetchAllIngredients = async () => {
  const response = await fetch('http://localhost:3001/ingredients');
  const ingredients: IngredientsAPI = await response.json();
  return ingredients;
}

export const fetchCabinetIngredients = async (cabinetId: number) => {
  const response = await fetch(
    `http://localhost:3001/cabinet_ingredients/${ cabinetId }`
  );
  const ingredients: IngredientsAPI = await response.json();
  return ingredients;
}

// cabinets api
export const createNewCabinet = async (formData: CabinetFormData, jwt: string) => {
  const response = await backendJWTRequest(
    'POST', 'http://localhost:3001/cabinets', jwt, formData
  );
  return response;
}

export const updateCabinet = async (cabinetSlug: string, formData: CabinetFormData, jwt: string) => {
  const response = await backendJWTRequest(
    'PUT', `http://localhost:3001/cabinets/${ cabinetSlug }`, jwt, formData
  );
  return response;
}

export const fetchCabinet = async (cabinetSlug: string, jwt: string) => {
  const response = await backendJWTRequest(
    'GET', `http://localhost:3001/cabinets/${ cabinetSlug }`, jwt )
  return response
}

export const deleteCabinet = async (cabinetSlug: string, jwt: string) => {
  const response = await backendJWTRequest(
    'DELETE', `http://localhost:3001/cabinets/${ cabinetSlug }`, jwt, cabinetSlug
  );
  return response;
}

// tools api
export const fetchTools = async () => {
  const response = await fetch('http://localhost:3001/tools');
  const tools: ToolsAPI = await response.json();
  return tools;
}

// sort options api
export const fetchSortOptions = async () => {
  const response = await fetch('http://localhost:3001/sort_options');
  const sortOptions: SortOptionAPI = await response.json();
  return sortOptions;
}

// user api
export const updateCurrentCabinet = async (cabinetId: number | null, jwt: string) => {
  const response = await backendJWTRequest(
    'POST', `http://localhost:3001/update_current_cabinet/${ cabinetId }`, jwt
  );
  return response
}

export const getCurrentUser = async (jwt: string) => {
  const user: User = await backendJWTRequest(
    'GET', 'http://localhost:3001/current_user', jwt
  )
  return user
}

// helpers
const backendJWTRequest = async (
  method: string,
  url: string,
  jwt: string,
  data?: CabinetFormData | string
) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Authorization': `Bearer ${ jwt }`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json();
}

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