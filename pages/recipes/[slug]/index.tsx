// library imports
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// api
import { fetchRecipe } from "@/pages/api/cocktail-api";

// types
import { Recipe } from "@/contexts/recipes.context";
import ControlBar from "@/layout/controlbar/controlbar.component";

const RecipePage = () => {
  // state 
  const router = useRouter();
  const { slug } = router.query
  const [ recipe, setRecipe ] = useState<Recipe | null>(null)

  useEffect(() => {
    const getRecipe = async () => {
      if (slug) {
        const { recipe } = await fetchRecipe(slug as string)
        setRecipe(recipe);
      }
    }
    getRecipe();
  }, [ slug ])

  recipe && console.log(recipe.name)
  return (
    <>
      <ControlBar>Control Bar</ControlBar>
      { recipe &&
        <div className="recipe">
          <h1 className="recipe__header">{ recipe.name }</h1>
        </div>
      }
      
    </>
  )
}

export default RecipePage