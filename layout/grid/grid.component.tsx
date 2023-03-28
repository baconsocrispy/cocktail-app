// external imports
import { FC } from "react";
import { useRouter } from "next/router";

// types
import { ReactNode } from "react"
type GridProps = {
  children: ReactNode
}

const Grid: FC<GridProps> = ({ children }) => {
  const { pathname } = useRouter();
  const gridForm = pathname === '/' || /(new|edit)$/.test(pathname);

  return (
    <div className={ gridForm ? 'grid grid__form' : 'grid grid__default' }>
      { children }
    </div>
  )
}

export default Grid