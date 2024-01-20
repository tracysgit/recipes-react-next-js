import parse from 'html-react-parser';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import H1Headline from '@/components/headlines/h1Headline';
import { getRecipe } from '@/lib/recipes';

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

  return (
    <section aria-labelledby="headline-recipe" className="recipe__wrapper mb-8 bg-white md:border border-gray-200 rounded-lg dark:border-gray-700">
      <div className="recipe__intro grid md:grid-cols-2 gap-0 md:border-b border-gray-200 dark:border-gray-700">
        <div className="recipe__title flex flex-col md:p-8 mb-8 md:mb-0">
          <H1Headline id="headline-recipe">{recipe.name}</H1Headline>
          {recipe.servings && <p className="text-lg text-gray-900 dark:text-white"><span className="font-semibold">Servings: </span>{recipe.servings}</p>}
          {recipe.category && <p className="text-lg text-gray-900 dark:text-white"><span className="font-semibold">Category: </span>{recipe.category}</p>}
          {recipe.tags && <div className="recipe__tags pt-6">
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
          {(recipe.source && (recipe.source).startsWith("http")) ? (
            <p><a href={recipe.source}>{parse(recipe.source)}</a></p>
          ) : (
            <p>{parse(recipe.source)}</p>
          )}
        </div>
        {recipe.image && <Image
          src={`/images/${recipe.image ? recipe.image : 'image_placeholder'}.webp`}
          width={400}
          height={250}
          className="recipe__image w-full md:rounded-tr-lg border-gray-200 dark:border-gray-700 md:rounded-tr-lg h-80 mb-8 md:mb-0"
          alt={recipe.image ? 'Image of ' + recipe.name : ''}
          priority
          style={{
            objectFit: 'cover',
          }}
        />}
      </div>
      {recipe['image_fullrecipe'] ? (
        <div className="recipe__directions md:border-b border-gray-200 dark:border-gray-700 md:p-8 mb-8 md:mb-0">
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
        <div className="recipe__ingredients md:border-b border-gray-200 dark:border-gray-700 md:p-8 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-6">Ingredients</h2>
          <p>{recipe.ingredients}</p>
        </div>
        <div className="recipe__directions md:border-b border-gray-200 dark:border-gray-700 md:p-8 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-6">Directions</h2>
          <p>{parse(recipe.directions)}</p>
        </div>
        </>
      )}
    </section>
  )
}