// data
enum ToolbarOptions {
  cabinets = 'Cabinets', 
  favorites = 'Favorites', 
  recipes = 'Recipes', 
  newRecipe = 'New Recipe', 
  discover = 'Discover'
}

const Toolbar = () => {
  const options = Object.values(ToolbarOptions);

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