import Image from 'next/image';
import { notFound } from 'next/navigation';
import H1Headline from '@/components/headlines/h1Headline';
import { capitalizeFirstLetter } from '@/lib/utils';
import { getRecipe } from '@/lib/recipes';

export default function RecipeSlugPage({ params }) {
  const recipe = getRecipe(params.recipeSlug); 

  return (
    <>
      <H1Headline>{recipe.name}</H1Headline>
    </>
  )
}
