// library imports
import { FC, MouseEventHandler } from "react"
import Link from "next/link"

// types
type NavLinkProps = {
  text: string
  href: string;
  onClick?: MouseEventHandler;
}

const NavLink: FC<NavLinkProps> = ({ text, href, onClick }) => {
  return (
    <li onClick={ onClick }>
      <Link href={ href } className="util-remove-link-styles">
        { text }
      </Link>
    </li>
  )
}

export default NavLink