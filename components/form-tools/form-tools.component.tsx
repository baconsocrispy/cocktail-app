// external imports
import { FC, useContext } from "react"

// components
import FormSelect from "../form-select/form-select.component";

// context
import { ToolsContext } from "@/contexts/tools.context";

// types
type FormToolsProps = {
  open: boolean;
}

const FormTools: FC<FormToolsProps> = ({ open }) => {
  // state
  const { tools } = useContext(ToolsContext);

  return (
    <div 
      className={ open ? "categories" : "categories--closed" }
    >
      <FormSelect 
        header={ 'Select one or more tools'} 
        options={ tools } 
      />
    </div>
  )
}

export default FormTools;