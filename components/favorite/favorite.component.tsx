// library imports
import { useState, FC, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as closedHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as openHeart } from '@fortawesome/free-regular-svg-icons';

// context
import { UserContext } from "@/contexts/user.context";

// api
import { favoriteRecipe } from "@/pages/api/cocktail-api";

// types
type FavoriteProps = {
  recipeId: number;
}

const Favorite: FC<FavoriteProps> = ({ recipeId }) => {
  // state
  const [ favorited, setFavorited ] = useState(false);
  const { jwt, user, getUser } = useContext(UserContext);

  useEffect(() => {
    const favorited = user?.favorites.some(
      (recipe) => Object.is(recipe.id, recipeId)
    )
    favorited ? setFavorited(true) : setFavorited(false)
  }, [ user?.favorites, recipeId ])
  
  // handlers
  const handleFavorite = async () => {
    if (jwt) {
      const response = await favoriteRecipe(recipeId, jwt);
      getUser();
    }
  }

  return (
    <div className="favorite">
      <button 
        onClick={ handleFavorite } 
        className='favorite__button util-default-button'
      >
        <FontAwesomeIcon 
          icon={ favorited ? closedHeart : openHeart } 
          className='favorite__icon'
        />
      </button>
    </div>
  )
}

export default Favorite