// "use client";

// import { useFormState } from 'react-dom';

import H1Headline from '@/components/headlines/h1Headline';
import ImagePicker from '@/components/form/ImagePicker';
import RecipeAddSubmit from '@/components/form/RecipeAddSubmit';
import { getCategories } from '@/lib/recipes';
import { capitalizeFirstLetter } from '@/lib/utils';
import { submitRecipe } from '@/lib/actions';

import classes from './page.module.css';

export default function AddRecipePage() {
  // const [state, formAction] = useFormState(submitRecipe, { message: null });

  const categories = getCategories();

  return (
    <>
      <header>
        <H1Headline>Add a recipe</H1Headline>
      </header>
      <section
        className="recipe__add"
        aria-label="Add a recipe"
      >
        {/* <form className={classes.form} action={formAction}> */}
        <form className={classes.form} action={submitRecipe}>
        <p>*Required information.</p>
          <div>
            <label htmlFor="name">Recipe Name*</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="category">Select a Category*</label>
            <select name="category" id="category" required>
              <option value="">-----</option>
              {categories.map((category) => {
                return (
                  <option 
                      key={category} 
                      value={category}
                  >{capitalizeFirstLetter(category)}</option>
                )
              })}
            </select>
          </div>
          <ImagePicker name="image_fullrecipe" label="Add an image of the recipe if you don't want to add details by hand." compclasses="mt-4" />
          <div>
            <label htmlFor="tags">Tags</label>
            <p>Enter a list of descriptive tags or notable ingredients separated by commas.</p>
            <input type="text" id="tags" name="tags" placeholder="savory, flaky, butter" />
          </div>
          <div>
            <label htmlFor="servings">Servings</label>
            <input type="text" id="servings" name="servings" />
          </div>
          <div>
            <label htmlFor="source">Source Name</label>
            <input type="text" id="source" name="source" />
          </div>
          <div>
            <label htmlFor="source_link">Source Link (URL)</label>
            <input type="url" id="source_link" name="source_link" />
          </div>
          <div>
            <label htmlFor="ingredients">Ingredients</label>
            <p>Each ingredient should be on its own line. Hit &apos;return&apos; between ingredients.</p>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="10"
            ></textarea>
          </div>
          <div>
            <label htmlFor="directions">Directions</label>
            <p>Each paragraph should be on its own line. Hit &apos;return&apos; between paragraphs.</p>
            <textarea
              id="directions"
              name="directions"
              rows="10"
            ></textarea>
          </div>
          <ImagePicker name="image" label="Add an image of the prepared dish." compclasses="mt-4" />
          <p className={classes.actions}>
            {/* {state.message && <p>{state.message}</p>} */}
            <RecipeAddSubmit />
            {/* <button className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Add Recipe</button> */}
          </p>
        </form>
        </section>
    </>
  );
}