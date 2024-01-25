'use server';

import { redirect } from 'next/navigation';
import { saveRecipe } from "./recipes";

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

  console.log("---> recipe",recipe);

  await saveRecipe(recipe);
  redirect('/');
}