export const fetchAllRecipes = async () => {
  const response = await fetch('http://localhost:3001/recipes');
  const recipes = await response.json();
  console.log(recipes)
}

