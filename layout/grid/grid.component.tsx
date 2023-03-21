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
  console.log(asPath)
  return (
    <div className='grid grid__home'>
      { children }
    </div>
  )
}

export default Grid