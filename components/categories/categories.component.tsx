// external imports
import { FC } from "react"

// components
import Select from "../select/select.component";

// types
type CategoriesProps = {
  open: boolean;
}

const categoryOptions = [
  'wine',
  'rum',
  'whiseky',
  'gin',
  'vodka',
  'sours',
  'punches',
  'soft drinks',
  'wine',
  'rum',
  'whiseky',
  'gin',
  'vodka',
  'sours',
  'punches',
  'soft drinks',
  'wine',
  'rum',
  'whiseky',
  'gin',
  'vodka',
  'sours',
  'punches',
  'soft drinks',
]

const Categories: FC<CategoriesProps> = ({ open }) => {
  return (
    <div 
      className={ open ? "categories categories--open" : "categories" }
    >
      <Select 
        header={ 'Select one or more categories'} 
        options={ categoryOptions } 
      />
    </div>
  )
}

export default Categories