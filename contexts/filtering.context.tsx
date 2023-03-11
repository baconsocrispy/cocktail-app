// external imports
import { createContext, ReactNode, useState } from "react";

// types
type FilterOptions = {
  ingredientIds?: number[] | null;
  categoryIds?: number[] | null;
  sortOption?: string;
  keyword?: string | null;
} 
type FilteringContextProps = {
  filterOptions: FilterOptions;
  updateFilterOptions: Function;
  resetFilterOptions: Function;
}

type FilteringProviderProps = {
  children: ReactNode;
}

// context
export const FilteringContext = createContext<FilteringContextProps>({
  filterOptions: {},
  updateFilterOptions: () => {},
  resetFilterOptions: () => {}
})

// provider
export const FilteringProvider = ({ children }: FilteringProviderProps) => {
  // initial state
  const [ filterOptions, setFilterOptions ] = useState<FilterOptions>({})

  // actions
  const updateFilterOptions = (filterOptions: FilterOptions) => {
    setFilterOptions(filterOptions)
  }

  const resetFilterOptions = () => {
    setFilterOptions({})
  }

  // export data
  const value = { 
    filterOptions,
    updateFilterOptions,
    resetFilterOptions
  };

  return (
    <FilteringContext.Provider value={ value }>
      { children }
    </FilteringContext.Provider>
  )
}