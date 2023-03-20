// external imports
import { useRouter } from "next/router";

// data
enum ToolbarOptions {
  cabinets = 'Cabinets', 
  favorites = 'Favorites', 
  recipes = 'Recipes', 
  newRecipe = 'New Recipe', 
  discover = 'Discover'
}

const Toolbar = () => {
  // state
  const options = Object.values(ToolbarOptions);
  const router = useRouter()

  // handlers
  const handleClick = (option: string) => {
    router.push('/' + option.toLowerCase())
  }

  return (
    <div className="toolbar">
      <ul className="toolbar__options">
        { options.map((option) => (
          <li key={ option } className="toolbar__option">
            <button className="toolbar__button" onClick={ () => handleClick(option) }>
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