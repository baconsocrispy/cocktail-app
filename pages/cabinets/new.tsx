// external imports
import { useContext } from "react"

// components
import CabinetForm from "@/components/cabinet-form/cabinet-form.component"

// context
import { UserContext } from "@/contexts/user.context"

const NewCabinetPage = () => {
  // state 
  const { user } = useContext(UserContext)
  
  return (
    <div className="new-cabinet">
      <div>NewCabinetPage</div>
      { user && <CabinetForm user={ user } /> }
    </div>
  )
}

export default NewCabinetPage