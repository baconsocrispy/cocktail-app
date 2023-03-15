// external imports
import { createContext, ReactNode, useState } from "react";

// types
import { Category } from "./categories.context";
import { Ingredient } from "./ingredients.context";
import { SortOption } from "./sort-by.context";

export type FilterOptions = {
  ingredientIds: number[];
  categoryIds: number[];
  sortOption: string | null;
  keyword: string | null;
}

type FilterOption = {
  class: string;
  id: number;
  name: string;
  option: Category | Ingredient | SortOption;
}

type FilteringContextProps = {
  filterOptions: FilterOptions;
  page: number;
  addFilterOption: Function;
  removeFilterOption: Function;
  resetFilterOptions: Function;
  updatePage: Function;
}

type FilteringProviderProps = {
  children: ReactNode;
}

// context
export const FilteringContext = createContext<FilteringContextProps>({
  filterOptions: {
    ingredientIds: [],
    categoryIds: [],
    sortOption: null,
    keyword: null
  },
  page: 1,
  updatePage: () => {},
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
    sortOption: null,
    keyword: null
  }

  const [ 
    filterOptions, 
    setFilterOptions 
  ] = useState<FilterOptions>(emptyFilterOptions)

  const [ page, setPage ] = useState(1);

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
        updatedFilterOptions.sortOption = option.name
        break;
    }
    
    setPage(1);
    setFilterOptions(updatedFilterOptions);
  }

  const removeFilterOption = (option: FilterOption) => {
    const updatedFilterOptions: FilterOptions = { ...filterOptions }

    switch (option.class.toLowerCase()) {
      case 'category':
        const categoryIds = updatedFilterOptions.categoryIds.filter(
          (id) => id !== option.id
        )
        updatedFilterOptions.categoryIds = categoryIds;
        break;
      case 'ingredient':
        const ingredientIds = updatedFilterOptions.ingredientIds.filter(
          (id) => id !== option.id
        )
        updatedFilterOptions.ingredientIds = ingredientIds;
        break;
    }
    
    setPage(1);
    setFilterOptions(updatedFilterOptions);
  }

  // break out into next page/previous page, 
  // accounting for page 1 as lowest limit
  const updatePage = (page: number) => {
    setPage(page)
  }

  const resetFilterOptions = () => {
    setPage(1);
    setFilterOptions(emptyFilterOptions)
  }

  // export data
  const value = { 
    filterOptions,
    page,
    updatePage,
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
