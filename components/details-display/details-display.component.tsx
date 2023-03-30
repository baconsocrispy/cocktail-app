// library imports
import { FC, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// context
import { UserContext } from "@/contexts/user.context";

// assets
import cocktailImage from '../../public/cocktail.webp';

// types
import { Recipe } from "@/contexts/recipes.context"
import { Cabinet } from "@/contexts/user.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

type DetailsDisplayProps = {
  object: Recipe | Cabinet;
}

const DetailsDisplay: FC<DetailsDisplayProps> = ({ object }) => {
  return (
    <div className="details-display">

      <div className="details-display__header"> 
        <h2 className="details-display__name">{ object.name }</h2>
        <Link 
          href={ `/cabinets/${ object.slug }/edit` }
          className='details-display__edit-link util-remove-link-styles'
        >
          <FontAwesomeIcon icon={ faPencilAlt } />
          Edit
        </Link>
      </div>
      
      <div className="details-display__image-container">
        <Image 
          src={ cocktailImage } 
          alt={ object.name } 
          className="details-display__image"
        />
      </div>

      <div className="details-display__details">
        <h3 className="details-display__sub-header">Ingredients</h3>
        <ul className="details-display__list">
          { object.ingredients.map((ingredient) => (
            <li key={ ingredient.id } className="details-display__option">
              { ingredient.name }
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="details-display__details">
        <h3 className="details-display__sub-header">Steps</h3>
        <ul className="details-display__list">
          { object.steps.map((step) => (
            <li key={ step.id } className="details-display__option">
              { step.name }
            </li>
          ))}
        </ul>
      </div>       */}
    </div>
  )
}

export default DetailsDisplay