// components
import { useEffect } from "react";
import Card from "../card/card.component"

import { fetchAllRecipes } from "@/pages/api/cocktail-api";

const Recipes = () => {
  useEffect(() => {
    const getRecipes = async () => {
      await fetchAllRecipes()
    }
    getRecipes()
  }, [])

  var cards = [];
  for (let i = 0; i < 60; i++) {
    cards.push(<Card key={ i } />) 
  }
  
  return (
    <div className="recipes">
      { cards }
    </div>
  )
}

export default Recipes