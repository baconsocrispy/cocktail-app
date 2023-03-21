// external imports
import { useContext } from "react"

// components
import CabinetForm from "@/components/cabinet-form/cabinet-form.component";

// context
import { UserContext } from "@/contexts/user.context"
import FormBar from "@/components/formbar/formbar.component";

const NewCabinetPage = () => {
  // state 
  const { user } = useContext(UserContext)
  
  return (
    <>
      <FormBar />    
      <div className="new-cabinet">
        
        { user && <CabinetForm user={ user } /> }
      </div>
    </>
   
  )
}

export default NewCabinetPage