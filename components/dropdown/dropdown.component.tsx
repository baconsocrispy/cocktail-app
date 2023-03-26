// library imports
import { useState, FC, useEffect } from "react"

// types
import { Cabinet } from "@/contexts/user.context";
type DropdownProps = {
  defaultItemName: string;
  header: string;
  onClick: (objectId: number | null) => Promise<void>;
  selectedObjectId?: number | null;
  objects?: Cabinet[];
}

const Dropdown: FC<DropdownProps> = ({ 
  defaultItemName,
  header, 
  onClick,
  selectedObjectId,
  objects
}) => {
  // state
  const [ open, setOpen ] = useState(false);
  const [ selectedItem, setSelectedItem ] = useState<number | null>(null);

  // preset selected object on load if selectedObjectId provided
  useEffect(() => {
    if (selectedObjectId) {
      setSelectedItem(selectedObjectId)
    }
  }, [])

  // handlers
  const handleChangeObject = () => setOpen(true);

  const handleClick = (objectId: number | null) => {
    onClick(objectId);
    setSelectedItem(objectId);
  }

  return (
    <div role="listbox" className="dropdown">
      <h4 className="dropdown__header">{ header }:</h4>
      <div></div>
      <ul
        role="list" 
        className="dropdown__list"
      >
        <li 
          role="option" 
          aria-selected={ !selectedItem }
          className={ !selectedItem ? 
            "dropdown__item dropdown__item--selected" : "dropdown__item"
          }
          onClick={ () => handleClick(null) } 
        >
          { defaultItemName }
        </li>

        { objects && objects.map((object) => (
            <li 
              key={ object.id }
              role="option"
              aria-selected={ selectedItem === object.id }
              className={ selectedItem === object.id ? 
                "dropdown__item dropdown__item--selected" : "dropdown__item"
              }
              onClick={ () => handleClick(object.id) }
            >
              { object.name }
            </li>
        ))}
      </ul>

      <button 
        className="dropdown__change-button util-default-button"
        onClick={ handleChangeObject }
      >
        Change
      </button>
    </div>
  )
}

export default Dropdown