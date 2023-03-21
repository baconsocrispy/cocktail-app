// external imports
import { FC } from "react";

// types
import { ReactNode } from "react"
type GridProps = {
  children: ReactNode
}

const Grid: FC<GridProps> = ({ children }) => {
  return (
    <div className='grid grid__home'>
      { children }
    </div>
  )
}

export default Grid