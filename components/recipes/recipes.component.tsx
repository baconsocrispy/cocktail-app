// external imports
import { useContext, useEffect, useState } from "react";

// components
import Card from "../card/card.component"

// context
import { RecipesContext } from "@/contexts/recipes.context";
import { FilteringContext } from "@/contexts/filtering.context";
import { UserContext } from "@/contexts/user.context";

// api
import { filterRecipes } from "@/pages/api/cocktail-api";


const Recipes = () => {
  // state
  const { recipes, updateRecipes } = useContext(RecipesContext);
  const { filterOptions, page } = useContext(FilteringContext);
  const { jwt } = useContext(UserContext);
  const [ loaded, setLoaded ] = useState(false);

  // filter recipes when filterOptions get updated
  useEffect(() => {
    if (loaded) {
      const getFilteredRecipes = async () => {
        const response = await filterRecipes(filterOptions, page, jwt);
        const { recipes } = response;
        updateRecipes(recipes);
      }
      getFilteredRecipes();
    } else {
      setLoaded(true);
    }

  }, [ filterOptions, page ])
  
  return (
    <div className="recipes">
      { recipes.map((recipe) => (
        <Card key={ recipe.id } recipe={ recipe } />
      ))}
    </div>
  )
}

export default Recipes