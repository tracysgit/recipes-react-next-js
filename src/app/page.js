import Link from 'next/link';
// import Image from 'next/image';
import H1Headline from '@/components/headlines/h1Headline';
import { CardImageTop } from '@/components/cards/cardImageTop';
import { getCategories, getRecipes } from '@/lib/recipes';
import { capitalizeFirstLetter, sortArrayOfObjAsc } from '@/lib/utils';

export const metadata = {
  title: 'Home | Recipes',
};

export default function Home() {
  const categories = getCategories();
  const recipes = getRecipes();
  const recipesAscending = sortArrayOfObjAsc(recipes, 'name');
  
  return (
    <>
      <H1Headline>All Recipes</H1Headline>
      {categories.map((category) => {
        return (
          <>
            <section
              key={category}
              //className="deck"
              className="deck border  rounded-xl border-gray-200 px-6 pt-3 pb-0 mb-8"
              aria-labelledby={`deck__title-${category.toLowerCase()}`}
            >
              <h2
                id={`deck__title-${category.toLowerCase()}`}
                className="py-2 text-2xl font-semibold text-blue-800 dark:bg-gray-800 dark:text-blue-400 underline"
              >
                <Link href={`/${category.toLowerCase()}`} className="">
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