// library imports
import { useContext } from "react";
import Link from "next/link";

// components
import Logo from "../logo/logo.component"; 

// context
import { UserContext } from "@/contexts/user.context";

const Nav = () => {
  // state
  const { user, signOut } = useContext(UserContext);

  // handlers
  const handleLogOut = () => signOut();

  return (
    <nav className="nav">
      <Link href='/' className="u-remove-link-styles">
        <Logo />
      </Link>
     
      <div className="nav__menu">
        { user && 
            <button onClick={ handleLogOut }>
              Log Out
            </button> 
        }
      </div>
    </nav>
  )
}

export default Nav