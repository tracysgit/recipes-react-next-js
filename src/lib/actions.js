'use server';

import { redirect } from 'next/navigation';
import { saveRecipe } from "./recipes";

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function submitRecipe(formData) {
  const recipe = { 
    name: formData.get('name'),
    category: formData.get('category'),
    ingredients: formData.get('ingredients'),
    directions: formData.get('directions'),
    source: formData.get('source'),
    source_link: formData.get('source_link'),
    servings: formData.get('servings'),
    image: formData.get('image'),
    image_fullrecipe: '',
  };

  if (
    isInvalidText(recipe.name) 
    // isInvalidText(recipe.ingredients) ||
    // isInvalidText(recipe.directions) ||
    // isInvalidText(recipe.source) ||
    // isInvalidText(recipe.source_link) ||
    // isInvalidText(recipe.servings) 
    // !recipe.creator_email.includes('@') ||
    // !recipe.image ||
    // recipe.image.size === 0
  ) {
    // throw new Error('Invalid input');
    return {
      message: 'Invalid input.'
    };
  }

  console.log("---> recipe",recipe);

  await saveRecipe(recipe);
  redirect('/');
}