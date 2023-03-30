// external imports
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// components
import DetailsDisplay from "@/components/details-display/details-display.component";

// api
import { fetchCabinet } from "@/pages/api/cocktail-api";

// types
import { Cabinet, UserContext } from "@/contexts/user.context";

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
    <main className="util-overflow-scroll">
      { cabinet && <DetailsDisplay object={ cabinet } /> }
    </main>
  )
}

export default CabinetPage