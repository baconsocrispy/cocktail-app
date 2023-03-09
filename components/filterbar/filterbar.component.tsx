// external imports
import { FC, useState } from "react"

// components
import Sidebar from "../sidebar/sidebar.component";

// types
type FilterbarProps = {
  options: string[];
}

const FilterBar: FC<FilterbarProps> = ({ options }) => {
  // state
  const [ sidebarOpen, setSidebarOpen ] = useState(false);

  // handlers
  const handleClick = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className='filterbar'>
      <ul className="filterbar__options">
        { options.map((option) => (
          <li key={ option } className="filterbar__option">
            <button className="filterbar__button" onClick={ handleClick }>
              <span className="filterbar__text">{ option }</span>
            </button>
          </li>
        )) }
      </ul>
      <Sidebar open={ sidebarOpen }/>
    </div>
  )
}

export default FilterBar