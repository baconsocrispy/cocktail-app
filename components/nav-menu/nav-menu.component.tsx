// library imports
import { useState } from "react";

// components
import Hamburger from "../hamburger/hamburger.component";
import NavLinks from "../nav-links/nav-links.component";
import NavLink from "../nav-link/nav-link.component";
import NavAuth from "../nav-auth/nav-auth.component";

const NavMenu = () => {
  // state
  const [ open, setOpen ] = useState(false);

  // handlers
  const handleHamburgerClick = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);
  
  return (
    <>
      <Hamburger onClick={ handleHamburgerClick } />

      <NavLinks open={ open }>
        <NavLink text='Recipes' href='/' onClick={ handleLinkClick } />
        <NavLink text='Cabinets' href='/cabinets' onClick={ handleLinkClick } />
        <NavAuth onClick={ handleLinkClick }/>
      </NavLinks>
    </>

  )
}

export default NavMenu