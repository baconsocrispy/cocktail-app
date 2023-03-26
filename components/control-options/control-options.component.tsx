// library imports
import { useState, FC, ReactElement, cloneElement, MouseEventHandler } from 'react';

// components
import ControlOption from '../control-option/control-option.component';
import Sidebar from '../sidebar/sidebar.component';

// types
type ControlOptionsProps = {
  options: string[];
  sidebarComponents: ReactElement[];
}

const ControlOptions: FC<ControlOptionsProps> = ({ 
  options, 
  sidebarComponents
}) => {
  // state
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const [ 
    sidebarContent, 
    setSidebarContent 
  ] = useState<number | null>(null);

  // handlers
  const handleCloseSidebar = () => setSidebarOpen(false);
  
  const handleOptionClick = (index: number) => {  
    setSidebarContent(index)
    setSidebarOpen(true)
  };

  return (
    <div className='control-options'>
      { options.map((option, index) => (
        <ControlOption 
          key={ option } 
          option={ option } 
          onClick={ () => handleOptionClick(index) } 
        />
      ))}

      <Sidebar open={ sidebarOpen } onClick={ handleCloseSidebar }>
        { sidebarComponents.map((component, index) => (
          cloneElement(component, {
            open: sidebarContent === index
          })
        ))}
      </Sidebar>
    </div>
  )
}

export default ControlOptions