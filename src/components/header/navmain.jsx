import Link from 'next/link';
import Navlink from './navlink';
import { getCategories } from '@/lib/recipes';
import { capitalizeFirstLetter } from '@/lib/utils';

export default function NavMain() {
  const categories = getCategories();

  return (
    <nav className="main-nav" aria-label="Main Menu">
      <ul className={`flex flex-row flex-wrap justify-start my-3 -mx-2`}>
        <li><Navlink href="/">Home</Navlink></li>
        
        {categories.map((category) => {
          const categoryCapital = capitalizeFirstLetter(category);

          return (
            <>
              <li key={category}><Navlink href={`/${category}`}>{categoryCapital}</Navlink></li>
            </>
          );
        })}
      </ul>
    </nav>
  )
}
