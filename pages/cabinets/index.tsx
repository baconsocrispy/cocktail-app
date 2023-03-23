// external imports
import { useContext } from 'react';
import Link from 'next/link';

// context
import { UserContext } from '@/contexts/user.context';

// components
import FilterBar from '@/components/filterbar/filterbar.component';
import { deleteCabinet } from '../api/cocktail-api';

const CabinetsPage = () => {
  // state
  const { user, jwt, getUser } = useContext(UserContext);

  // handlers
  const handleDeleteCabinet = async(cabinetSlug: string) => {
    if(jwt) {
      const response = await deleteCabinet(cabinetSlug, jwt);
      await getUser();
    }
  }

  return (
    <>
      <FilterBar />
      <div>
        <h1>Cabinets</h1>
        { user && 
          <ul>
            { user.cabinets.map((cabinet) => (
              <li key={ cabinet.id }>
                <Link href={ `cabinets/${ cabinet.slug }`}>{ cabinet.name }</Link>
                <button onClick={ () => handleDeleteCabinet(cabinet.slug) }>X</button>
              </li>
            ))}
          </ul>
        }
        <Link href='/cabinets/new'>New Cabinet</Link>
      </div>
    </>
   
  )
}

export default CabinetsPage