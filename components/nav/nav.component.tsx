// external imports
import { useContext } from "react";
import Link from "next/link";

// context
import { UserContext } from "@/contexts/user.context";

const Nav = () => {
  // state
  const { user, signOut } = useContext(UserContext);

  // handlers
  const handleLogOut = () => signOut();

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link href='/'>Home</Link>
        <Link href='/auth'>Auth</Link>
      </div>

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