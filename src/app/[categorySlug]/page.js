import { notFound } from 'next/navigation';
import H1Headline from '@/components/headlines/h1Headline';
import { CardImageTop } from '@/components/cards/cardImageTop';
import { capitalizeFirstLetter, sortArrayOfObjAsc } from '@/lib/utils';
import { getRecipesByCategory } from '@/lib/recipes';

export async function generateMetadata({ params }) {
  const category = params.categorySlug;
  
  if (!category) {
    notFound();
  }

  return {
    title: capitalizeFirstLetter(category)
  };
}

export default async function CategorySlugPage({ params }) {
  const category = params.categorySlug;
  const recipes = await getRecipesByCategory(category); 
  const recipesAscending = sortArrayOfObjAsc(recipes, 'name');

  return (
    <>
      <header>
        <H1Headline>{capitalizeFirstLetter(category)}</H1Headline>
      </header>
      <section
        className="deck"
        aria-labelledby={`deck__title-${category.toLowerCase()}`}
      >
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
                    key={index}
                    card={recipe}
                    linkRoute={`/${recipe.category}/`}
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
}
