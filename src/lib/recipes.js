import { slugifyString } from './utils';
import data from '@/json/data.json';

export function getCategories() {
  return data.categories;
}

// export function getCategory(slug) {
//   return slug;
// }

export function getRecipes() {
  return data.recipes;
}

export function getRecipesByCategory(category) {
  const recipes = (getRecipes()).filter((recipe) =>
    recipe.category
      .toLowerCase()
      .includes(category.toLowerCase())
  ); 
  return recipes;
}

export function getRecipe(slug) {
  const recipes = getRecipes();
  const filteredRecipes = recipes.filter(recipe => recipe['name_slug'] === slug);

  if (filteredRecipes) {
    return filteredRecipes[0];
  } else {
    return null;
  }
}