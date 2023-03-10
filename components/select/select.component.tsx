// external imports
import { FC } from "react"

// components
import Option from "../option/option.component"

// types
type SelectProps = {
  header: string;
  options: string[];
}

const Select: FC<SelectProps> = (
  { header, options }
) => {
  return (
    <div className="select">

      <h4 className="select__header">{ header }</h4>

      <ul className="select__options">
        { options.map((option) => (
          <Option option={ option } key={ option } />
        ))}
      </ul>
    </div>
    
  )
}

export default Select