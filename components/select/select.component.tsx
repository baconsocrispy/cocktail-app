// library imports
import { FC } from "react"

// components
import Option from "../option/option.component"

// types
import { Category } from "@/contexts/categories.context"
import { Ingredient } from "@/contexts/ingredients.context"
import { Portion } from "../form-portion/form-portion.component"
import { SortOption } from "@/contexts/sort-by.context"
import { Tool } from "@/contexts/tools.context"

type SelectProps = {
  header: string;
  options: Category[] | Ingredient[] | SortOption[] | Tool[] | Portion[];
}

const Select: FC<SelectProps> = (
  { header, options }
) => {
  return (
    <div role="listbox" className="select">
      <h4 className="select__header">{ header }</h4>
      <ul role="list" className="select__options">
        { options.map((option) => (
          <Option option={ option } key={ option.id } />
        ))}
      </ul>

    </div>
  )
}

export default Select