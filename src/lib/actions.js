'use server';

import { redirect } from 'next/navigation';
import { saveRecipe } from "./recipes";

function isInvalidText(text) {
  return !text || text.trim() === '';
}

// export async function submitRecipe(prevState, formData) {
export async function submitRecipe(formData) {
  const recipe = { 
    name: formData.get('name'),
    category: formData.get('category'),
    tags: formData.get('tags'),
    ingredients: formData.get('ingredients'),
    directions: formData.get('directions'),
    source: formData.get('source'),
    source_link: formData.get('source_link'),
    servings: formData.get('servings'),
    image: formData.get('image'),
    image_fullrecipe: '',
  };

  console.log("---> recipe",recipe);

  await saveRecipe(recipe);
  //revalidatePath('/recipe-add', 'layout'); //Forces Next not to cache. 'layout' affects nested pages too, otherwise leave off.
  redirect('/');
}