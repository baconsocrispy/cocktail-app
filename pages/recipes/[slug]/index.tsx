// library imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// components
import DetailsDisplay from "@/components/details-display/details-display.component";

// api
import { fetchRecipe } from "@/pages/api/cocktail-api";

// types
import { Recipe } from "@/contexts/recipes.context";


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

  return (
    <main className="util-overflow-scroll">
      { recipe && <DetailsDisplay object={ recipe } /> }
    </main>
  )
}

export default RecipePage