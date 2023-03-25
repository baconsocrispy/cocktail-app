// library imports
import { FC } from "react";
import Link from "next/link";

// types
type LogoProps = {
  href: string;
}

const Logo: FC<LogoProps> = ({ href }) => {
  return (
    <div className='logo'>
      <Link href={ href } className='util-remove-link-styles'>
        <span className='logo__text'>Cocktailings</span>
      </Link>
    </div>
  )
}

export default Logo