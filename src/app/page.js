import Link from 'next/link';
// import Image from 'next/image';
import H1Headline from '@/components/headlines/h1Headline';
import ButtonAddRecipe from '@/components/buttons/ButtonAddRecipe';
import { CardImageTop } from '@/components/cards/cardImageTop';
import { getCategories, getRecipes } from '@/lib/recipes';
import { capitalizeFirstLetter, sortArrayOfObjAsc } from '@/lib/utils';

export const metadata = {
  title: 'Home | Recipes2',
};

export default async function Home() {
  const categories = getCategories();
  const recipes = await getRecipes();
  const recipesAscending = sortArrayOfObjAsc(recipes, 'name');
  
  return (
    <>
      <header className="flex flex-row flex-wrap gap-2 justify-between mb-2 md:mb-6 lg:mb-8">
        <H1Headline>All Recipes</H1Headline>
        <ButtonAddRecipe />
      </header>
      {categories.map((category) => {
        return (
          <>
            <section
              key={category}
              className="deck"
              aria-labelledby={`deck__title-${category.toLowerCase()}`}
            >
              <h2
                id={`deck__title-${category.toLowerCase()}`}
                className="mt-2 pt-2 text-4xl lg:text-5xl text-blue-800 dark:text-white font-sacramento"
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