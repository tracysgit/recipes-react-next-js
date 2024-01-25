import Link from 'next/link';
// import Image from 'next/image';
import H1Headline from '@/components/headlines/h1Headline';
import { CardImageTop } from '@/components/cards/cardImageTop';
import { getCategories, getRecipes } from '@/lib/recipes';
import { capitalizeFirstLetter, sortArrayOfObjAsc } from '@/lib/utils';

export const metadata = {
  title: 'Home | Recipes',
};

export default async function Home() {
  const categories = getCategories();
  const recipes = await getRecipes();
  const recipesAscending = sortArrayOfObjAsc(recipes, 'name');
  
  return (
    <>
      <header className="flex flex-row justify-between mb-2 md:mb-6 lg:mb-8">
        <H1Headline>All Recipes</H1Headline>
        <Link href='/recipe-add' className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Recipe</Link>
      </header>
      {categories.map((category) => {
        return (
          <>
            <section
              key={category}
              className="deck"
              // className="deck border bg-gray-100 rounded-xl border-gray-200 px-6 pt-3 pb-0 mb-8"
              aria-labelledby={`deck__title-${category.toLowerCase()}`}
            >
              <h2
                id={`deck__title-${category.toLowerCase()}`}
                className="mt-2 pt-2 text-4xl text-blue-800 dark:bg-gray-800 dark:text-blue-400 font-sacramento"
              >
                <Link href={`/${category.toLowerCase()}`} className="hover:underline">
                  {capitalizeFirstLetter(category)}
                </Link>
              </h2>
              <ul className="deck--grid-card-image-upper mb-10 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {recipesAscending
                  .filter((recipe) =>
                    recipe.category
                      .toLowerCase()
                      .includes(category.toLowerCase()),
                  )
                  .map((recipe, index) => {
                    return (
                      <li key={index}>
                        <CardImageTop
                          linkRoute={`/${recipe.category}/`}
                          card={recipe}
                          className=""
                        >                      
                        </CardImageTop>
                      </li>
                    );
                  })}
              </ul>
            </section>
          </>
        )
      })}
    </>
  )
}