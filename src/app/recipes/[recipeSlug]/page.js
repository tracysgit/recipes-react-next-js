import parse from 'html-react-parser';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import H1Headline from '@/components/headlines/h1Headline';
import { getRecipe } from '@/lib/recipes';
import { capitalizeFirstLetter } from '@/lib/utils';

import classes from './page.module.css';

export async function generateMetadata({ params }) {
  const recipe = getRecipe(params.recipeSlug);

  if (!recipe) {
    notFound();
  }

  return {
    title: recipe.name
  };
}

export default function RecipeSlugPage({ params }) {
  const recipe = getRecipe(params.recipeSlug);
  // recipe.source = parse(recipe.source);
  recipe.ingredients = recipe.ingredients.replace(/\n/g, `<br />`);
  recipe.directions = recipe.directions.replace(/\n/g, `<br /><br />`);
  // recipe.directions = recipe.directions.replace(/\n/g, `</br><li>`);

  if (!recipe) {
    notFound();
  }

  return (
    <section aria-labelledby="headline-recipe" className="recipe__wrapper bg-white grid md:grid-cols-1 gap-8">
      <div className="recipe__intro grid md:grid-cols-2 gap-8">
        <div className="recipe__title flex flex-col order-last md:order-first">
          <H1Headline id="headline-recipe">{recipe.name}</H1Headline>
          {recipe.servings && <p className="text-lg text-gray-900 dark:text-white mt-2 md:mt-0"><span className="font-semibold">Servings: </span>{recipe.servings}</p>}
          {recipe.category && <p className="text-lg text-gray-900 dark:text-white"><span className="font-semibold">Category: </span>{capitalizeFirstLetter(recipe.category)}</p>}
          {recipe.source && 
            <p className="text-lg text-gray-900 dark:text-white"><span className="font-semibold">Source: </span>
              {recipe.source_link ? (
                <a href={recipe.source_link} target="_blank" className="underline">{recipe.source}</a>
              ) : (
                <>{recipe.source}</>
              )}
            </p>}
          {recipe.tags && <div className="recipe__tags pt-4 md:pt-6">
            {recipe.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="mb-1 mr-2 mt-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #{tag}
                </span>
              );
            })}
          </div>}
        </div>
        {recipe.image && <Image
          src={`/images/${recipe.image ? recipe.image : 'image_placeholder'}.webp`}
          width={400}
          height={250}
          className="recipe__image w-full h-64 rounded-lg"
          alt={recipe.image ? 'Image of ' + recipe.name : ''}
          priority
          style={{
            objectFit: 'cover',
          }}
        />}
      </div>
      {recipe['image_fullrecipe'] ? (
        <div className="recipe__directions">
          <Image
            src={`/images/${recipe['image_fullrecipe']}.jpg`}
            width={400}
            height={400}
            className="w-full h-auto"
            alt={`Image of ${recipe['image_fullrecipe']} `}
            priority
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      ) : (
        <>
          <div className="recipe__ingredients lg:max-w-[80%]">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <div className="space-y-1 list-disc list-inside dark:text-gray-400">
              <p className="leading-8 md:columns-2" dangerouslySetInnerHTML={{__html: recipe.ingredients}}></p>
            </div>
          </div>
          <div className="recipe__directions lg:max-w-[80%] space-y-1 list-disc list-inside dark:text-gray-400">
            <h2 className="text-2xl font-semibold mb-4">Directions</h2>
            <p dangerouslySetInnerHTML={{__html: recipe.directions}}></p>
          </div>
        </>
      )}
    </section>
  )
}