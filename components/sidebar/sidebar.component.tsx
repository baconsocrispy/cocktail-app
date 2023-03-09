// external imports
import { FC, ReactNode } from "react"

// types
type SidebarProps = {
  open: boolean;
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ open, children }) => {
  return (
    <div className={ open ? 'sidebar sidebar__open' : 'sidebar' }>
      <div className="sidebar__content">
        { children }
      </div>
    </div>
  )
}

export default Sidebar