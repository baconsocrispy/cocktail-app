// external imports
import { FC, MouseEventHandler, ReactNode } from "react"

// types
type SidebarProps = {
  open: boolean;
  onClick: MouseEventHandler;
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ open, onClick, children }) => {
  return (
    <div className={ open ? 'sidebar sidebar__open' : 'sidebar' }>
        <button 
          className="sidebar__close-button" 
          onMouseDown={ onClick }
        >
          Close X
        </button>
      <div className="sidebar__content">
        { children }
      </div>
    </div>
  )
}

export default Sidebar