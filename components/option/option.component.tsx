// external imports
import { Category } from "@/contexts/categories.context";
import { FC, useState } from "react"

// types
type OptionProps = {
  option: Category;
}

const Option: FC<OptionProps> = ({ option }) => {
  // state
  const [ selected, setSelected ] = useState(false);

  // handlers
  const handleClick = () => setSelected(!selected);

  return (
    <li 
      onClick={ handleClick } 
      className={ selected ? 'option option--selected' : 'option'}
    >
      { option.name }
    </li>
  )
}

export default Option