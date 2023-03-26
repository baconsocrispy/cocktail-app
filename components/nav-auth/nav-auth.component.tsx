// library imports
import { useContext, FC } from "react";
import { useRouter } from "next/router";

// contexts
import { UserContext } from "@/contexts/user.context";

// types
type NavAuthProps = {
  onClick?: Function;   
}

const NavAuth: FC<NavAuthProps> = ({ onClick }) => {
  // state
  const { user, signOut } = useContext(UserContext);

  // navigation
  const router = useRouter();

  const handleClick = () => {
    user ? signOut() : router.push('/auth')
    onClick && onClick();
  }

  return (
    <div className='nav-auth'>
      <button onClick={ handleClick } className='util-default-button'>
        { user ? 'Sign Out' : 'Sign In' }
      </button>
    </div>
  )
}

export default NavAuth