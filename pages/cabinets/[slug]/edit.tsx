// library imports
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// context
import { FormProvider } from '@/contexts/form.context';
import { Cabinet, UserContext } from '@/contexts/user.context';

// components
import ControlBar from '@/layout/controlbar/controlbar.component';
import ControlOptions from '@/components/control-options/control-options.component';
import CabinetForm from '@/components/cabinet-form/cabinet-form.component';
import FormCategories from '@/components/form-categories/form-categories.component';
import FormIngredients from '@/components/form-ingredients/form-ingredients.component';
import FormTools from '@/components/form-tools/form-tools.component';

// api
import { fetchCabinet } from '@/pages/api/cocktail-api';

// data
const controlOptions = [ 'Ingredients', 'Categories', 'Tools' ];
const sidebarComponents = [
  <FormIngredients key='ingredients' open={ false} />,
  <FormCategories key='categories' open={ false } />,
  <FormTools key='tools' open={ false } /> 
]

const EditCabinetPage = () => {
  // state
  const { user, jwt } = useContext(UserContext);
  const router = useRouter();
  const { slug } = router.query;
  const [ cabinet, setCabinet ] = useState<Cabinet | null>();

  useEffect(() => {
    const getCabinet = async () => {
      if (slug && jwt) {
        const cabinet: Cabinet = await fetchCabinet(slug as string, jwt);
        setCabinet(cabinet)        
      }
    }
    getCabinet();
  }, [ slug, jwt ])

  return (    
    <FormProvider>
      <ControlBar>
        <ControlOptions 
          options={ controlOptions} 
          sidebarComponents={ sidebarComponents } 
        />
      </ControlBar>
      { (user &&  cabinet) && <CabinetForm userId={ user.id } cabinet={ cabinet } /> }
    </FormProvider>
  )
}

export default EditCabinetPage