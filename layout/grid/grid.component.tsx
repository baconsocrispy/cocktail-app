// external imports
import { FC } from "react";
import { useRouter } from "next/router";

// types
import { ReactNode } from "react"
type GridProps = {
  children: ReactNode
}

const Grid: FC<GridProps> = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className={ asPath === '/' ? 'grid grid__home' : 'grid grid__page' }>
      { children }
    </div>
  )
}

export default Grid