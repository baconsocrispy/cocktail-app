// types
import type { NextApiRequest, NextApiResponse } from 'next';

export const getRecipes = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const response = await fetch('https://localhost:3001/recipes');
  const recipes = await response.json();

  res.status(200).json(recipes)
}

