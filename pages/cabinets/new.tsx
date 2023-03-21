// external imports
import { useContext } from "react"

// components
import CabinetForm from "@/components/cabinet-form/cabinet-form.component";
import FormBar from "@/components/formbar/formbar.component";

// context
import { UserContext } from "@/contexts/user.context"
import { FormProvider } from "@/contexts/form.context";

const NewCabinetPage = () => {
  // state 
  const { user } = useContext(UserContext)
  
  return (
    <FormProvider>
      <FormBar />    
      <div className="new-cabinet">
        { user && <CabinetForm userId={ user.id } /> }
      </div>
    </FormProvider>
  )
}

export default NewCabinetPage