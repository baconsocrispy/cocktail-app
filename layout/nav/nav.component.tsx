// components
import Logo from "../../components/logo/logo.component"; 
import NavMenu from "@/components/nav-menu/nav-menu.component";

const Nav = () => {
  return (
    <nav className="nav">
      <Logo href='/' />
      <NavMenu />
    </nav>
  )
}

export default Nav