// external imports
import { FC } from "react"

// types
type SidebarProps = {
  open: boolean;
}

const Sidebar: FC<SidebarProps> = ({ open }) => {
  return (
    <div className={ open ? 'sidebar sidebar__open' : 'sidebar' }>
      Sidebar
    </div>
  )
}

export default Sidebar