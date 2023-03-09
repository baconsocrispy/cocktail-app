import Card from "../card/card.component"


const Recipes = () => {
  var cards = [];
  for (let i = 0; i < 60; i++) {
    cards.push(<Card />) 
  }
  
  return (
    <div className="recipes">
      { cards }
    </div>
  )
}

export default Recipes