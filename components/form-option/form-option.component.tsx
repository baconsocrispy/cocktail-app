// external imports
import { FC, MouseEvent } from "react"

// types
import { Ingredient } from "@/contexts/ingredients.context"
import { Tool } from "@/contexts/tools.context"

type FormOptionProps = {
  option: Ingredient | Tool;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

const FormOption: FC<FormOptionProps> = ({ option, onClick }) => {
  return (
    <li onClick={ onClick }>{ option.name }</li>
  )
}

export default FormOption