import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import data from '@/json/data.json';

const db = sql('recipes.db');

export function getCategories() {
  return data.categories;
}

export async function getRecipes() {
  return data.recipes;
  await new Promise((resolve) => setTimeout(resolve, 5000));
  //return db.prepare('SELECT * FROM recipes').all();
}

export async function getRecipesByCategory(category) {
  const recipes = await getRecipes();
  const filteredRecipes = (recipes).filter((recipe) =>
    recipe.category
      .toLowerCase()
      .includes(category.toLowerCase())
  ); 
  return filteredRecipes;
  // return db.prepare('SELECT * FROM recipes WHERE category = ?').all(category);
}

export async function getRecipe(slug) {
  const recipes = await getRecipes();
  const filteredRecipes = recipes.filter(recipe => recipe['name_slug'] === slug);

  if (filteredRecipes) {
    return filteredRecipes[0];
  } else {
    return null;
  }
  // return db.prepare('SELECT * FROM recipes WHERE name_slug = ?').get(slug);
}

export async function saveRecipe(recipe) {
  //Image should be stored on the system, while its path should be stored in the DB.

  recipe.name_slug = slugify(recipe.name, { lower: true });
  recipe.ingredients = xss(recipe.ingredients);
  recipe.directions = xss(recipe.directions);

  //Process recipe.image
  if (recipe.image.name !== 'undefined') {
    const extension = recipe.image.name.split().pop();
    const fileName = `${recipe.category}_${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await recipe.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error)=> {
      if(error) {
        throw new Error('Saving image failed!');
      }
    });

    recipe.image = `${fileName}`; //Public/images folder is implied
  } else {
    recipe.image = '';
  }

  //Process recipe.image_fullrecipe
  if (recipe.image_fullrecipe.name !== 'undefined') {
    const extension = recipe.image_fullrecipe.name.split().pop();
    const fileName = `recipe_${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await recipe.image_fullrecipe.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error)=> {
      if(error) {
        throw new Error('Saving image failed!');
      }
    });

    recipe.image_fullrecipe = `${fileName}`; //Public/images folder is implied
  } else {
    recipe.image_fullrecipe = '';
  }

  db.prepare(`
    INSERT INTO recipes
      (name, name_slug, category, tags, ingredients, directions, source, source_link, servings, image, image_fullrecipe)
    VALUES (
      @name,
      @name_slug,
      @category,
      @tags,
      @ingredients,
      @directions,
      @source,
      @source_link,
      @servings,
      @image,
      @image_fullrecipe
    )
  `).run(recipe);
}