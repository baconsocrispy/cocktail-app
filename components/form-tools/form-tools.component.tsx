// external imports
import { FC, useContext } from "react"

// components
import Select from "../select/select.component";

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
      className={ open ? "categories categories--open" : "categories" }
    >
      <Select 
        header={ 'Select one or more tools'} 
        options={ tools } 
      />
    </div>
  )
}

export default FormTools;