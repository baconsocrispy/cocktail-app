// external imports
import { createContext, useState, useEffect, ReactNode } from "react";

// api
import { fetchSortOptions } from "@/pages/api/cocktail-api";

// types
export type SortOption = {
  id: number;
  name: string;
}

type SortByContextProps = {
  sortOptions: SortOption[];
}

type SortByProviderProps = {
  children: ReactNode;
}

// context 
export const SortByContext = createContext<SortByContextProps>({
  sortOptions: []
})

// provider
export const SortByProvider = ({ children }: SortByProviderProps) => {
  // state
  const [ sortOptions, setSortOption ] = useState<SortOption[]>([]);

  // set sortOptions on load
  useEffect(() => {
    const getSortOptions = async () => {
      const response = await fetchSortOptions();
      setSortOption(response.sortOptions)
    }
    getSortOptions();
  }, [])

  // export data
  const value = { sortOptions };

  return (
    <SortByContext.Provider value={ value }>
      { children }
    </SortByContext.Provider>
  )
}