import H1Headline from '@/components/headlines/h1Headline';
import Button from '@/components/Button';
import ImagePicker from '@/components/form/ImagePicker';

import classes from './page.module.css';

export default function AddRecipePage() {
  // const handleClick = function() {
  //   console.log("button clicked");
  // };

  return (
    <>
      <header>
        <H1Headline>Add a recipe</H1Headline>
      </header>
      <section
        className="recipe__add"
        aria-label="Add a recipe"
      >
        <form className={classes.form}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker />
          <p className={classes.actions}>
            {/* <Button href="https://google.com" target="_blank" id="btn1" extraclasses="ml-2">Link Button</Button> */}
            <Button id="addrecipe" extraclasses="ml-2" type="submit">Add Recipe</Button>
          </p>
        </form>
      </section>
    </>
  );
}