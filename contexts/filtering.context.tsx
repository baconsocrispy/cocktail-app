// external imports
import { createContext, ReactNode, useState } from "react";

// types
import { Category } from "./categories.context";
import { Ingredient } from "./ingredients.context";
import { SortOption } from "./sort-by.context";

type FilterOptions = {
  ingredientIds: number[];
  categoryIds: number[];
  sortOptionId: number | null;
  keyword: string | null;
}

type FilterOption = {
  class: string;
  id: number;
  option: Category | Ingredient | SortOption | string;
}

type FilteringContextProps = {
  filterOptions: FilterOptions;
  addFilterOption: Function;
  removeFilterOption: Function;
  resetFilterOptions: Function;
}

type FilteringProviderProps = {
  children: ReactNode;
}

// context
export const FilteringContext = createContext<FilteringContextProps>({
  filterOptions: {
    ingredientIds: [],
    categoryIds: [],
    sortOptionId: null,
    keyword: null
  },
  addFilterOption: () => {},
  removeFilterOption: () => {},
  resetFilterOptions: () => {}
})

// provider
export const FilteringProvider = ({ children }: FilteringProviderProps) => {
  // initial state
  const emptyFilterOptions: FilterOptions = {
    ingredientIds: [],
    categoryIds: [],
    sortOptionId: null,
    keyword: null
  }

  const [ 
    filterOptions, 
    setFilterOptions 
  ] = useState<FilterOptions>(emptyFilterOptions)

  // actions
  const addFilterOption = (option: FilterOption) => {
    const updatedFilterOptions = { ...filterOptions }

    switch (option.class.toLowerCase()) {
      case 'category':
        updatedFilterOptions.categoryIds.push(option.id)
        break;
      case 'ingredient':
        updatedFilterOptions.ingredientIds.push(option.id)
        break;
      case 'sortoption':
        updatedFilterOptions.sortOptionId = option.id
        break;
    }

    setFilterOptions(updatedFilterOptions);
  }

  const removeFilterOption = (option: FilterOption) => {
    const updatedFilterOptions = { ...filterOptions }

    switch (option.class.toLowerCase()) {
      case 'category':
        const categoryIds = updatedFilterOptions.categoryIds.filter(
          (id) => id !== option.id
        )
        updatedFilterOptions.categoryIds = categoryIds;
      case 'ingredient':
        const ingredientIds = updatedFilterOptions.ingredientIds.filter(
          (id) => id !== option.id
        )
        updatedFilterOptions.ingredientIds = ingredientIds;
    }

    setFilterOptions(updatedFilterOptions);
  }

  console.log(filterOptions)
  const resetFilterOptions = () => {
    setFilterOptions(emptyFilterOptions)
  }

  // export data
  const value = { 
    filterOptions,
    addFilterOption,
    removeFilterOption,
    resetFilterOptions
  };

  return (
    <FilteringContext.Provider value={ value }>
      { children }
    </FilteringContext.Provider>
  )
}
