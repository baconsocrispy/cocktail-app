// external imports
import { FC } from "react"

// types
type ToobarProps = {
  options: string[];
}

const Toolbar: FC<ToobarProps> = ({ options }) => {
  return (
    <div className="toolbar">
      <ul className="toolbar__options">
        { options.map((option) => (
          <li key={ option } className="toolbar__option">
            <button className="toolbar__button">
              <span className="toolbar__icon">&#9742;</span>
              <span className="toolbar__text">{ option }</span>
            </button>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default Toolbar