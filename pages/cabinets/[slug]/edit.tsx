// external imports
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// context
import { FormProvider } from '@/contexts/form.context';
import { Cabinet, UserContext } from '@/contexts/user.context';

// components
import CabinetForm from '@/components/cabinet-form/cabinet-form.component';
import FormBar from '@/components/formbar/formbar.component';
import { fetchCabinet } from '@/pages/api/cocktail-api';

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
      <FormBar />
      { (user &&  cabinet) && <CabinetForm userId={ user.id } cabinet={ cabinet } /> }
    </FormProvider>
  )
}

export default EditCabinetPage