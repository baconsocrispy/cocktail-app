// external imports
import { FC, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// components
import FilterBar from "@/components/formbar/formbar.component"

// api
import { fetchCabinet } from "@/pages/api/cocktail-api";

// types
import { Cabinet, UserContext } from "@/contexts/user.context"


// TO DO
/*  
    3. align id vs. slug method between frontend and backend
    4. Edit / Delete Buttons, maybe 'back to cabinets' too
    5. Remove FormBar 
    6. Reroute if user is not signed in or does not have access
*/ 


const CabinetPage = () => {
  // state
  const router = useRouter();
  const  { slug }  = router.query;
  const { jwt } = useContext(UserContext);
  const [ cabinet, setCabinet ] = useState<Cabinet | null>(null);

  useEffect(() => {
    const getCabinet = async () => {
      if(slug && jwt) {
        const cabinet: Cabinet = await fetchCabinet(slug as string, jwt);
        setCabinet(cabinet)
      }
    }
    getCabinet();
  }, [ slug, jwt ])

  return (
    <>
      <FilterBar />
      <div>
        { cabinet && <h3>{ cabinet.name }</h3>}
        <Link href={ `/cabinets/${ slug }/edit` }>Edit</Link>
      </div>
    </>
  )
}

export default CabinetPage