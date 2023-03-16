// external imports
import { useContext } from "react"

// context
import { UserContext } from "@/contexts/user.context"

const Nav = () => {
  // state
  const { signOut } = useContext(UserContext);

  // handlers
  const handleLogOut = () => signOut()

  return (
    <nav className="nav">
      <div className="nav__logo">
        NavLogo
      </div>
      <div className="nav__menu">
        <button onClick={ handleLogOut }>Log Out</button>
      </div>
    </nav>
  )
}

export default Nav