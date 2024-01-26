import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import H1Headline from '@/components/headlines/h1Headline';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import { getRecipe } from '@/lib/recipes';
import { capitalizeFirstLetter } from '@/lib/utils';
import ButtonAddRecipe from '@/components/buttons/ButtonAddRecipe';

export async function generateMetadata({ params }) {
  const recipe = await getRecipe(params.recipeSlug);

  if (!recipe) {
    notFound();
  }

  return {
    title: recipe.name
  };
}

export default async function RecipeSlugPage({ params }) {
  const recipe = await getRecipe(params.recipeSlug);

  if (!recipe) {
    notFound();
  }

  if ('ingredients' in recipe) {
    recipe.ingredients_edited = recipe.ingredients.replace(/\n/g, `<br />`);
  }
  if ('directions' in recipe) {
    recipe.directions_edited = recipe.directions.replace(/\n/g, `<br /><br />`);
  }
  if ('tags' in recipe && recipe.tags !== '') {
    recipe.tags_array = (recipe.tags).split(',');
  }

  return (
    <>
      <header className="flex flex-row flex-wrap gap-2 justify-between mb-6 lg:mb-8">
        <Breadcrumbs homeElement={'Home'}
            separatorSymbol="&rsaquo;"
            activeClasses='text-blue-800 dark:text-white underline'
            navClasses='text-md ml-1' 
            listWrapperClasses='block'
            listItemClasses='inline'
            linkClasses='underline'
            capitalizeLinks={false}
        />
        <ButtonAddRecipe />
      </header>
      
      <section aria-labelledby="headline-recipe" className="recipe__wrapper bg-white grid md:grid-cols-1 gap-8">
        <div className="recipe__intro grid md:grid-cols-2 gap-8">
          <div className="recipe__title flex flex-col order-last md:order-first"> 
            <H1Headline id="headline-recipe" extraclasses="mb-2 md:mb-6 lg:mb-8">{recipe.name}</H1Headline>
            {recipe.servings && <p className="text-lg text-gray-900 dark:text-white mt-2 md:mt-0"><span className="font-semibold">Servings: </span>{recipe.servings}</p>}
            {recipe.category && <p className="text-lg text-gray-900 dark:text-white"><span className="font-semibold">Category: </span>{capitalizeFirstLetter(recipe.category)}</p>}
            {recipe.source && 
              <p className="text-lg text-gray-900 dark:text-white"><span className="font-semibold">Source: </span>
                {recipe.source_link ? (
                  <a href={recipe.source_link} target="_blank" className="underline">{recipe.source}</a>
                ) : (
                  <>{recipe.source}</>
                )}
              </p>
            }
            {recipe.tags_array && <div className="recipe__tags pt-4 md:pt-6">
              {recipe.tags_array.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="mb-1 mr-2 mt-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #{tag.trim()}
                  </span>
                );
              })}
            </div>}
          </div>
          {recipe.image && <Image
            src={`/images/${recipe.image ? recipe.image : 'image_placeholder'}`}
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
              src={`/images/${recipe['image_fullrecipe']}`}
              width={400}
              height={400}
              className="w-auto h-auto mx-auto"
              alt={`Image of ${recipe['image_fullrecipe']} `}
              priority
              style={{
                // objectFit: 'contain',
                // width: 'auto',
                // height: 'auto',
              }}
            />
          </div>
        ) : (
          <>
            {recipe.ingredients && 
            <div className="recipe__ingredients lg:max-w-[80%]">
              <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
              <div className="space-y-1 list-disc list-inside">
                <p className="leading-8 text-lg" dangerouslySetInnerHTML={{__html: recipe.ingredients_edited}}></p>
                {/* <p className="leading-8 text-lg">{parse(recipe.ingredients_edited)}</p> */}
              </div>
            </div>
            }
            {recipe.directions &&
            <div className="recipe__directions lg:max-w-[80%] space-y-1 list-disc list-inside">
              <h2 className="text-2xl font-semibold mb-4">Directions</h2>
              <p className="text-lg" dangerouslySetInnerHTML={{__html: recipe.directions_edited}}></p>
              {/* <p className="text-lg">{parse(recipe.directions_edited)}</p> */}
            </div>
            }
          </>
        )}
      </section>
    </>
  )
}