// external imports
import { FC } from "react"

// types
type CategoriesProps = {
  open: boolean;
}

const Categories: FC<CategoriesProps> = ({ open }) => {
  return (
    <div 
      className={ open ? "categories categories--open" : "categories" }
    >
      Categories
    </div>
  )
}

export default Categories