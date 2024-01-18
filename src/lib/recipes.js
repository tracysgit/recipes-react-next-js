import { slugifyString } from './utils';
import data from '@/json/data.json';

export function getCategories() {
  return data.categories;
}

export function getCategory(slug) {
  return slug;
}

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
  return recipes[0];

  // return recipes.filter(recipe => recipe.name.toLowerCase() === "crepe");

  
  // const recipe = (getRecipes()).filter((recipe) => {
  //   recipe.nameSlugified = "crepe";
  //   return recipe.name.toLowerCase() === "crepe";

  // });
  //   // recipe.nameSlugified = "crepe";
  
  //   // recipe.name === "Crepes"

  //   // recipe.name
  //   //   .toLowerCase()
  //   //   .includes(recipe.nameSlugified)
  // // ); 
  // return recipes;
}