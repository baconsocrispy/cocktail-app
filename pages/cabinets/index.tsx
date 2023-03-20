// external imports
import { useContext } from 'react';
import Link from 'next/link';

// context
import { UserContext } from '@/contexts/user.context';

// components
import Toolbar from '@/components/toolbar/toolbar.component';

const CabinetsPage = () => {
  // state
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Cabinets</h1>
      { user && 
        <ul>
          { user.cabinets.map((cabinet) => (
            <li key={ cabinet.id }>{ cabinet.name }</li>
          ))}
        </ul>
      }
      <Link href='/cabinets/new'>New Cabinet</Link>
    </div>
  )
}

export default CabinetsPage