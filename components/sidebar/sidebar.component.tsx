// external imports
import { FC, MouseEventHandler, ReactNode, useEffect } from "react"

// types
type SidebarProps = {
  open: boolean;
  onClick: MouseEventHandler;
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ open, onClick, children }) => {
  // prevent page scrolling while sidebar is open
  useEffect(() => {
    open && (document.body.style.overflow = 'hidden');
  }, [ open ])

  return (
    <div className={ open ? 'sidebar' : 'sidebar sidebar--closed' }>
      <button 
        className="sidebar__close-button"
        onMouseDown={ onClick }
      >
        X
      </button>
      <div className="sidebar__content">
        { children }
      </div>
    </div>
  )
}

export default Sidebar