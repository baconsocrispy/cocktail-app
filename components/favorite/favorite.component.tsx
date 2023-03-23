// library imports
import { useState, FC, useContext } from "react";

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
  const { jwt, getUser } = useContext(UserContext);
  
  // handlers
  const handleFavorite = () => {
    const setFavorite = async () => {
      if (jwt) {
        const response = await favoriteRecipe(recipeId, jwt);
        if (response.message === 'Favorited') {
          setFavorited(true)
          getUser();
        } else if (response.message === 'Unfavorited') {
          setFavorited(false)
          getUser();
        }
      }
    }
    setFavorite();
  }

  return (
    <div>
      <button onClick={ handleFavorite }>
        { favorited ? 'favorited' : 'unfavorited'}
      </button>
    </div>
  )
}

export default Favorite