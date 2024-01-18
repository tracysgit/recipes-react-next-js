import data from '@/json/data.json';

export function getCategories() {
  return data.categories;
}

export function getRecipes() {
  // console.log("recipes[0]",recipes[0]);
  return data.recipes;
}

export function getRecipe(slug) {
  console.log("getRecipe:",slug);
}