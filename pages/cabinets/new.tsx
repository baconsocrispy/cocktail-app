// external imports
import { useContext } from "react"

// components
import CabinetForm from "@/components/cabinet-form/cabinet-form.component";
import FormCategories from "@/components/form-categories/form-categories.component";
import FormIngredients from "@/components/form-ingredients/form-ingredients.component";
import FormTools from "@/components/form-tools/form-tools.component";

// context
import { UserContext } from "@/contexts/user.context"
import { FormProvider } from "@/contexts/form.context";
import ControlBar from "@/layout/controlbar/controlbar.component";
import ControlOptions from "@/components/control-options/control-options.component";

// data
const controlOptions = [ 'Ingredients', 'Categories', 'Tools' ];
const sidebarComponents = [
  <FormIngredients key='ingredients' open={ false} />,
  <FormCategories key='categories' open={ false } />,
  <FormTools key='tools' open={ false } /> 
]

const NewCabinetPage = () => {
  // state 
  const { user } = useContext(UserContext)
  
  return (
    <FormProvider>
      <ControlBar>
        <ControlOptions 
          options={ controlOptions }
          sidebarComponents={ sidebarComponents }
        />
      </ControlBar> 
      <div className="new-cabinet">
        { user && <CabinetForm userId={ user.id } /> }
      </div>
    </FormProvider>
  )
}

export default NewCabinetPage