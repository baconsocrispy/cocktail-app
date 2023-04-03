// library imports
import { FC, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

// components
import Select from "../select/select.component";

// assets
import cocktailImage from '../../public/cabinet.png';

// context
import { IngredientsContext } from "@/contexts/ingredients.context";

// types
import { Recipe } from "@/contexts/recipes.context"
import { Cabinet } from "@/contexts/user.context";



type DetailsDisplayProps = {
  object: Recipe | Cabinet;
}

const DetailsDisplay: FC<DetailsDisplayProps> = ({ object }) => {
  // state
  const { ingredientTypes } = useContext(IngredientsContext);
  return (
    <div className="details-display">

      <div className="details-display__header"> 
        <h2 className="details-display__name">{ object.name }</h2>

        <div className="details-display__image-container">
          <Image 
            src={ cocktailImage } 
            alt={ object.name } 
            className="details-display__image"
          />
        </div>

        <Link 
          href={ `/cabinets/${ object.slug }/edit` }
          className='details-display__edit-link util-remove-link-styles'
        >
          <FontAwesomeIcon icon={ faPencilAlt } />
          Edit
        </Link>
      </div>

      { ingredientTypes.map((type) => (
        <Select 
          key={ type } 
          header={ type }
          options={
            object.portions.filter((portion) => portion.type === type) 
          }  
        />
      ))}

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