// external imports
import { createContext, ReactNode, useEffect, useState } from "react";

// api
import { fetchAllCategories } from "@/pages/api/cocktail-api";

// types
export type Category = {
  class: string;
  created_at: string;
  id: number;
  name: string;
  updated_at: string;
}

type CategoriesContextProps = {
  categories: Category[];
}

type CategoriesProviderProps = {
  children: ReactNode;
}

// context
export const CategoriesContext = createContext<CategoriesContextProps>({
  categories: []
})

// provider
export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  // initial state
  const [ categories, setCategories ] = useState<Category[]>([]);

  // set categories on load
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetchAllCategories();
      const { categories } = response;
      setCategories(categories)
    }
    getCategories();
  }, [])

  // export data
  const value = { categories }

  return (
    <CategoriesContext.Provider value={ value }>
      { children }
    </CategoriesContext.Provider>
  )
}