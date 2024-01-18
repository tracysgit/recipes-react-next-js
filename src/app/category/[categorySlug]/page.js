import { notFound } from 'next/navigation';
import H1Headline from '@/components/headlines/h1Headline';
import { CardImageTop } from '@/components/cards/cardImageTop';
import { capitalizeFirstLetter } from '@/lib/utils';
import { getCategory, getRecipesByCategory } from '@/lib/recipes';

export default function CategorySlugPage({ params }) {
  const category = getCategory(params.categorySlug); 
  const recipes = getRecipesByCategory(category); 

  return (
    <>
      <H1Headline>{capitalizeFirstLetter(category)} Recipes</H1Headline>
      <section
        className="deck"
        aria-labelledby={`deck__title-${category.toLowerCase()}`}
      >
        <ul className="deck--grid-card-image-upper mb-10 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recipes
            .filter((recipe) =>
              recipe.category
                .toLowerCase()
                .includes(category.toLowerCase()),
            )
            .map((recipe, index) => {
              return (
                <CardImageTop
                  key={index}
                  card={recipe}
                  className=""
                >                      
                </CardImageTop>
              );
            })}
        </ul>
      </section>
    </>
  )
}
