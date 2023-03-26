// library imports
import { FC, MouseEventHandler } from "react"

// types
type ControlOptionProps = {
  option: string;
  onClick: MouseEventHandler;
}

const ControlOption: FC<ControlOptionProps> = ({ option, onClick }) => {
  return (
    <div key={ option } className="control-option">
      <button
        className="control-option__button util-default-button" 
        onClick={ onClick }
      >
        { option }
      </button>
    </div>
  )
}

export default ControlOption