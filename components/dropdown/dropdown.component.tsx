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
  const [ selectedItemId, setSelectedItemId ] = useState<number | null>(null);
  const [ selectedItemName, setSelectedItemName ] = useState<string>(defaultItemName);

  // set selected object on load if selectedObjectId provided
  useEffect(() => {
    if (selectedObjectId) {
      setSelectedItemId(selectedObjectId)

      objects && objects.map((object) => {
        if (object.id === selectedObjectId) setSelectedItemName(object.name);
      })
    }
  }, [])

  // handlers
  const handleChangeObject = () => setOpen(!open);

  const handleClick = (
    objectId: number | null, 
    objectName: string
  ) => {
    onClick(objectId);
    setSelectedItemId(objectId);
    setSelectedItemName(objectName);
    setOpen(false);
  }

  return (
    <div role="listbox" className="dropdown">
      <h4 className="dropdown__header">{ header }:</h4>

      <div className="dropdown__selection">{ selectedItemName }</div>

      <button 
        className="dropdown__change-button util-default-button"
        onClick={ handleChangeObject }
      >
        Change
      </button>

      <ul
        role="list" 
        className={open ? "dropdown__list" : "dropdown__list dropdown__list--closed" }
      >
        <li 
          role="option" 
          aria-selected={ !selectedItemId }
          className={ !selectedItemId ? 
            "dropdown__item dropdown__item--selected" : "dropdown__item"
          }
          onClick={ () => handleClick(null, defaultItemName) } 
        >
          { defaultItemName }
        </li>

        { objects && objects.map((object) => (
            <li 
              key={ object.id }
              role="option"
              aria-selected={ selectedItemId === object.id }
              className={ selectedItemId === object.id ? 
                "dropdown__item dropdown__item--selected" : "dropdown__item"
              }
              onClick={ () => handleClick(object.id, object.name) }
            >
              { object.name }
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown