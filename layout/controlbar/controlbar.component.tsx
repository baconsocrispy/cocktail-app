// library imports
import { FC, ReactNode } from "react"

// types
type ControlBarProps = {
  children: ReactNode;
}

const ControlBar: FC<ControlBarProps> = ({ children }) => {
  return (
    <div className='controlbar'>
      { children }
    </div>
  )
}

export default ControlBar