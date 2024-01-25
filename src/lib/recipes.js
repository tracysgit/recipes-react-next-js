import sql from 'better-sqlite3';
import { slugifyString } from './utils';
import data from '@/json/data.json';

const db = sql('recipes.db');

export function getCategories() {
  return data.categories;
}

export async function getRecipes() {
  // return data.recipes;
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare('SELECT * FROM recipes').all();
}

export async function getRecipesByCategory(category) {
  // const recipes = await getRecipes();
  // const filteredRecipes = (recipes).filter((recipe) =>
  //   recipe.category
  //     .toLowerCase()
  //     .includes(category.toLowerCase())
  // ); 
  // return filteredRecipes;
  return db.prepare('SELECT * FROM recipes WHERE category = ?').all(category);
}

export async function getRecipe(slug) {
  // const recipes = await getRecipes();
  // const filteredRecipes = recipes.filter(recipe => recipe['name_slug'] === slug);

  // if (filteredRecipes) {
  //   return filteredRecipes[0];
  // } else {
  //   return null;
  // }
  return db.prepare('SELECT * FROM recipes WHERE name_slug = ?').get(slug);
}