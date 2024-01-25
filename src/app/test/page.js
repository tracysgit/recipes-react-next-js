import classes from './page.module.css';

export default function TestPage() {
  async function shareMeal(formData) {
    'use server';
    console.log("in shareMeal");

    // const recipe = { 
    //   name: formData.get('name'),
    //   // name_slug: formData.get('aaa'), 
    //   // category: formData.get('category'),
    //   ingredients: formData.get('ingredients'),
    //   // directions: formData.get('aaa'),
    //   // source: formData.get('aaa'),
    //   // source_link: formData.get('aaa'),
    //   // servings: formData.get('aaa'),
    //   image: formData.get('image'),
    //   // image_fullrecipe: formData.get('aaa'),
    // };

    // console.log("recipe",recipe);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Test Page: Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
          </p>
          IMAGE PICKER
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
