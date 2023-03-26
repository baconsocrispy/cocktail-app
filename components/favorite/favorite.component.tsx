// library imports
import { useState, FC, useContext, useEffect } from "react";

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
    <div>
      <button onClick={ handleFavorite }>
        { favorited ? 'favorited' : 'unfavorited'}
      </button>
    </div>
  )
}

export default Favorite