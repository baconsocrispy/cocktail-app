// library imports
import { FC, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

// context 
import { UserContext } from "@/contexts/user.context";

// assets
import cocktailImage from '../../public/cocktail.webp';

// components
import Favorite from "../favorite/favorite.component";

// types
import { Recipe } from "@/contexts/recipes.context";

type CardProps = {
  recipe: Recipe;
}

const Card: FC<CardProps> = ({ recipe }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="card">
      <Link href={ `recipes/${ recipe.slug }` } className='util-remove-link-styles'>
        <Image src={ cocktailImage } alt='cocktail' className="card__image" />
        <p className="card__name">{ recipe.name }</p>
      </Link>
      { user && <Favorite recipeId={ recipe.id } /> }
    </div>
  )
}

export default Card