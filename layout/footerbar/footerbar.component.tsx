// external imports
import { useRouter } from "next/router";

// data
enum FooterbarOptions {
  cabinets = 'Cabinets', 
  favorites = 'Favorites', 
  recipes = 'Recipes', 
  newRecipe = 'New Recipe', 
  discover = 'Discover'
}

const Footerbar = () => {
  // state
  const options = Object.values(FooterbarOptions);
  const router = useRouter()

  // handlers
  const handleClick = (option: string) => {
    router.push('/' + option.toLowerCase())
  }

  return (
    <footer className="footerbar">
      <ul className="footerbar__options">
        { options.map((option) => (
          <li key={ option } className="footerbar__option">
            <button 
              className="footerbar__button" 
              onClick={ () => handleClick(option) }
            >
              <span className="footerbar__icon">&#9742;</span>
              <span className="footerbar__text">{ option }</span>
            </button>
          </li>
        )) }
      </ul>
    </footer>
  )
}

export default Footerbar