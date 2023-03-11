// external imports
import { createContext, ReactNode, useState } from "react";

// types
import { Category } from "./categories.context";
import { Ingredient } from "./ingredients.context";
import { SortOption } from "./sort-by.context";

type FilterOptions = {
  ingredientIds?: number[] | null;
  categoryIds?: number[] | null;
  sortOptionId?: number;
  keyword?: string | null;
}

type FilterOption = {
  option: Category | Ingredient | SortOption;
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
  const updateFilterOptions = (option: FilterOption) => {
    const updatedFilterOptions = {
      ...filterOptions
    };

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

// know what type of object it is
// based on type test whether id already in relevant id array
// if not, add to array
// if so, remove from array
