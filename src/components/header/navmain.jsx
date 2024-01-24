import Navlink from './navlink';
import { getCategories } from '@/lib/recipes';
import { capitalizeFirstLetter } from '@/lib/utils';

export default function NavMain() {
  const categories = getCategories();

  return (
    <nav className="mainnav" aria-label="Main Menu">
      <input className="mainmenu-btn" type="checkbox" id="mainmenu-btn" />
      <label className="mainmenu-icon mt-2 md:mt-0" htmlFor="mainmenu-btn" tabIndex="0"><span className="navicon"></span></label>
      <ul className="mainmenu flex flex-row flex-wrap justify-center my-0 md:my-3 -mx-2 leading-8">
        <li key="home" className="my-1 md:my-0"><Navlink href="/">Home</Navlink></li>
        
        {categories.map((category) => {
          const categoryCapital = capitalizeFirstLetter(category);

          return (
            <>
              <li key={category} className="my-1 md:my-0"><Navlink href={`/${category}`}>{categoryCapital}</Navlink></li>
            </>
          );
        })}
      </ul>
    </nav>
  )
}
