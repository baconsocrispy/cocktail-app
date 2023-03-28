// library imports
import { FC, ReactNode } from "react"

// types
type ControlBarProps = {
  children: ReactNode;
}

const ControlBar: FC<ControlBarProps> = ({ children }) => {
  return (
    <section className='controlbar'>
      { children }
    </section>
  )
}

export default ControlBar