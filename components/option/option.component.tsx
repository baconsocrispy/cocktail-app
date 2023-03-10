// external imports
import { FC, useState } from "react"

// types
type OptionProps = {
  option: string;
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
      { option }
    </li>
  )
}

export default Option