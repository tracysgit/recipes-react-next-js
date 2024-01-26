const sql = require('better-sqlite3');
const db = sql('recipes.db');

const dummyRecipes = [
  {
    "name": "Fish en Papillote",
    "name_slug": "fish-en-papillote",
    "category": "entrees",
    "tags": "zucchinis, tomatoes, fish",
    "ingredients": "",
    "directions": "",
    "source": "",
    "source_link": "",
    "servings": "4",
    "image": "entrees_fish-en-papillote.jpg",
    "image_fullrecipe": "recipe_fish-en-papillote.jpg"
  },
  {
    "name": "Lemon Chicken",
    "name_slug": "lemon-chicken",
    "category": "entrees",
    "tags": "lemon, spicy",
    "ingredients": "",
    "directions": "",
    "source": "",
    "source_link": "",
    "servings": "4",
    "image": "entrees_lemon-chicken.jpg",
    "image_fullrecipe": "recipe_lemon-chicken.jpg"
  },
  {
    "name": "Ensalada de Uvas",
    "name_slug": "ensalada-de-uvas",
    "category": "salads",
    "tags": "grape, savory, salad",
    "ingredients": "1 c. seedless red grapes\n1 c. seedless green grapes\n1/2 c. small cherry tomatoes\n1 c. fresh cilengene (small mozzarella balls or cut larger mozzarella chunks into 1\" cubes)\n1 c. pitted black olives or kalamatas\n2 T. chopped fresh mint\n1 T. minced fresh garlic\n1 t. grated lemon peel\n2 T. sherry vinegar\n1/4 c. extra virgin olive oil\nSalt and pepper to taste",
    "directions": "Toss all ingredients well and chill for 1 hour before serving. Can be eaten at room temperature.",
    "source": "",
    "source_link": "",
    "servings": "8 tapas servings",
    "image": "salad_ensalada-de-uvas.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Gazpacho with Avocado and Crab",
    "name_slug": "gazpacho-with-avocado-and-crab",
    "category": "soups",
    "tags": "gazpacho, avocado, crab, soup",
    "ingredients": "",
    "directions": "",
    "source": "",
    "source_link": "",
    "servings": "4",
    "image": "soup_gazpacho-with-avocado-and-crab.jpg",
    "image_fullrecipe": "recipe_gazpacho-with-avocado-and-crab.jpg"
  },
  {
    "name": "Chicken Saltimbocca",
    "name_slug": "chicken-saltimbocca",
    "category": "entrees",
    "tags": "chicken, proscuitto, sage",
    "ingredients": "",
    "directions": "",
    "source": "",
    "source_link": "",
    "servings": "4",
    "image": "entree_chicken-saltimbocca.jpg",
    "image_fullrecipe": "recipe_chicken-saltimbocca.jpg"
  },
  {
    "name": "Oven Steamed Mussels",
    "name_slug": "oven-steamed-mussels",
    "category": "sides",
    "tags": "mussels, bacon, cider, wine, steamed",
    "ingredients": "",
    "directions": "",
    "source": "Cooks Illustrated",
    "source_link": "",
    "servings": "2 to 4",
    "image": "side_oven-steamed-mussels.jpg",
    "image_fullrecipe": "recipe_oven-steamed-mussels.jpg"
  },
  {
    "name": "Chicken Marsala",
    "name_slug": "chicken-marsala",
    "category": "entrees",
    "tags": "chicken, mushrooms",
    "ingredients": "",
    "directions": "",
    "source": "Cooks Illustrated",
    "source_link": "",
    "servings": "4",
    "image": "entree_chicken-marsala.jpg",
    "image_fullrecipe": "recipe_chicken-marsala.jpg"
  },
  {
    "name": "Espinacas con Garbanzos",
    "name_slug": "espinacas-con-garbanzos",
    "category": "entrees",
    "tags": "garbazos, spinach",
    "ingredients": "",
    "directions": "",
    "source": "",
    "source_link": "",
    "servings": "4",
    "image": "entree_espinacas-con-garbanzos.jpg",
    "image_fullrecipe": "recipe_espinacas-con-garbanzos.jpg"
  },
  {
    "name": "Smoked Fish Chowder",
    "name_slug": "smoked-fish-chowder",
    "category": "soups",
    "tags": "fish, soup",
    "ingredients": "",
    "directions": "",
    "source": "",
    "source_link": "",
    "servings": "4",
    "image": "soup_smoked-fish-chowder.jpg",
    "image_fullrecipe": "recipe_smoked-fish-chowder.jpg"
  },
  {
    "name": "Peanut Butter Cookies",
    "name_slug": "peanut-butter-cookies",
    "category": "desserts",
    "tags": "peanut butter, cookie",
    "ingredients": "",
    "directions": "",
    "source": "",
    "source_link": "",
    "servings": "4 dozen cookies",
    "image": "dessert_peanut-butter-cookies.jpg",
    "image_fullrecipe": "recipe_peanut-butter-cookies.jpg"
  },
  {
    "name": "Pumpkin Bread",
    "name_slug": "pumpkin-bread",
    "category": "desserts",
    "tags": "pumpkin, quick bread",
    "ingredients": "",
    "directions": "",
    "source": "",
    "source_link": "",
    "servings": "1 loaf",
    "image": "dessert_pumpkin-bread.jpg",
    "image_fullrecipe": "recipe_pumpkin-bread.jpg"
  },
  {
    "name": "Cauliflower with Brown Butter, Pears, Sage & Hazelnuts",
    "name_slug": "cauliflower-with-brown-butter-pears-sage-and-hazelnuts",
    "category": "sides",
    "tags": "cauliflower, butter, hazelnut",
    "ingredients": "3 oz. (6 T.) unsalted butter\n1 medium cauliflower head, cut into 3/4\" florets\n1/2 c. toasted, skinned, chopped hazelnuts\n8 fresh sage leaves, thinly sliced crosswise\nKosher salt and ground black pepper\n2 large ripe pears, cored and thinly sliced\n2 T. chopped fresh flat-leaf parsley",
    "directions": "In a 12-inch skillet over medium-high heat, melt the butter until light browns and bubbly. Add the cauliflower, hazelnuts, and sage. Cook 2 minutes, stirring occasionally. Season with 1 t. salt and 1/2 t. pepper and continue cooking, stirring occasionally, until the cauliflower is browned and crisp-tender, 6-7 minutes more.\nRemove the pan from heat. Add the pear slices and parsley. Gently toss to combine and warm the pears. Season to taste with more salt. Serve hot or at room temperature.",
    "source": "",
    "source_link": "",
    "servings": "8 to 10",
    "image": "side_cauliflower-with-brown-butter-pears-sage-and-hazelnuts.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Crepes",
    "name_slug": "crepes",
    "category": "sides",
    "tags": "bread, dessert",
    "ingredients": "1 c. flour\n1-1/2 c. milk\n2 eggs\n2 T. sugar\n1 t. melted butter\n1/4 t. salt",
    "directions": "Combine flour, milk, eggs, and butter. Add salt. Heat a lightly greased 6-inch skillet; remove from heat. Add enough batter to coat the pan. Tilt skillet to spread evenly across the skillet. Return to heat; brown on one side only. Flip crepe to brown other side of the crepe.",
    "source": "",
    "source_link": "",
    "servings": "7 crepes",
    "image": "entree_crepes.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Dutch Baby",
    "name_slug": "dutch-baby",
    "category": "desserts",
    "tags": "dessert, pancake, sweet",
    "ingredients": "3 large eggs, at room temperature\n1/2 c. all-purpose flour\n1/2 c. whole milk, at room temperature\n1 T. sugar\nPinch of nutmeg\n4 T. unsalted butter\nConfectioner's sugar",
    "directions": "Preheat oven to 425&#8457;.\nCombine eggs, flour, milk, sugar, and nutmeg, and blend until smooth.\nPlace butter in a heavy 10-inch skillet and place in the oven. When butter has melted, add batter to the pan. Return the pan to the oven and bake for 20 minutes, until the pancake is puffed and golden. Lower oven temperature to 300&#8457; and bake five minutes longer.\nSprinkle with confectioner's sugar before serving.",
    "source": "New York Times",
    "source_link": "https://cooking.nytimes.com/recipes/6648-dutch-baby",
    "servings": "3 to 4",
    "image": "dessert_dutch-baby.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Oatmeal Carmelitas",
    "name_slug": "oatmeal-carmelitas",
    "category": "desserts",
    "tags": "dessert, oatmeal, butter, sweet",
    "ingredients": "2 c. flour\n2 c. quick-cook oats\n1-1/2 c. packed brown sugar\n1 t. baking soda\n1/2 t. salt\n1-1/4 c. butter\n1 c. caramel topping\n3 T. flour\n1 c. chocolate chips\n1 c. white chocolate chips",
    "directions": "Heat oven to 350&#8457;. Grease 13\" x 9\" pan. Lightly spoon flour into measuring cup; level off. In large bowl, combine all crust ingredients; mix at low speed until crumbly. Reserve half of crumb mixture (about 3 cups) for topping. Press remaining crumb mixture in bottom of greased pan. Bake for 10 minutes.\nMeanwhile, in small bowl, combine caramel topping and 3 tablespoons flour; blend well. Remove partially baked crust from oven; sprinkle with chocolate chips and nuts. Drizzle evenly with caramel mixture; sprinkle with reserved crumb mixture. Return to oven; bake an additional 18 to 22 minutes or until golden brown. Cool 1 hour or until completely cooled. Refrigerate 1 to 2 hours or until filling is set. Cut into bars.",
    "source": "Pilsbury",
    "source_link": "https://www.pillsbury.com/recipes/oatmeal-carmelitas",
    "servings": "13\" x 9\" tray of bars",
    "image": "dessert_oatmeal-carmelitas.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Sablés",
    "name_slug": "sables",
    "category": "desserts",
    "tags": "cookie, punition, butter, sweet",
    "ingredients": "140 gm unsalted butter, room temperature\n125 gm white sugar\n1 large egg, room temperature\n2 c. all-purpose flour",
    "directions": "Cream the butter and sugar until thoroughly blended. Add the egg and stir until the mixture is smooth and satiny. Add the flour all at once and mix until the dough forms clumps and curds and looks like coarse meal. Form the dough into discs. Cover and refrigerate until firm.\nRoll out the dough to 1/8&quot; thickness. Cut the cookies with a fluted, 4cm circular cookie cutter.\nBake at 350&#8457; for approximately 8-12 minutes or the preferred level of brownness.",
    "source": "Poilâne Bakery",
    "source_link": "https://beautifuleatingmess.blogspot.com/2014/02/poilanes-punitions-french-butter-cookies.html",
    "servings": "60 cookies",
    "image": "dessert_sable-cookies.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Anise Cookies",
    "name_slug": "anise-cookies",
    "category": "desserts",
    "tags": "cookie, anise, butter, sweet",
    "ingredients": "4 c. flour\n1 t. baking powder\n1 t. baking soda\n2 sticks butter\n2 eggs\n2 T. milk\n2 c. sugar\n1/2 t. anise oil or 3-4 t. anise extract",
    "directions": "Preheat oven to 350&#8457;.\nCombine dry ingredients. Combine remaining ingredients in a separate bowl. Combine all ingredients and mix.\nDivide dough into two balls and refrigerate. Roll out dough to 1/8 in. thick. Bake for approximately 5 minutes.",
    "source": "Grandma Krebs",
    "source_link": "",
    "servings": "50 cookies",
    "image": "dessert_anise-cookies.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Banana Bread",
    "name_slug": "banana-bread",
    "category": "desserts",
    "tags": "quick bread, banana, sweet",
    "ingredients": "2 c. flour\n1 t. baking soda\n1/2 t. salt\n1 egg\n1/2 c. oil\n3 bananas\n1 c. sugar\n1 t. vanilla",
    "directions": "Preheat oven to 350&#8457;.\nMash bananas, and mix other wet ingredients. In a separate bowl, mix dry ingredients. Combine. Add batter to greased bread tin.\nCook for 1 hour or until a skewer comes out clean.",
    "source": "",
    "source_link": "",
    "servings": "1 loaf",
    "image": "dessert_banana-bread.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Orange Julius",
    "name_slug": "orange-julius",
    "category": "drinks",
    "tags": "smoothie, orange",
    "ingredients": "1 c. milk\n2 t. vanilla\n1 6-oz can frozen orange juice concentrate\n1/2 c. sugar\n1-1/2 c. ice",
    "directions": "Blend the milk and vanilla in a blender. Add the frozen orange juice concentrate. Blend until fully combined with the milk. Add the sugar and ice cubes, and blend until cubes are crushed and mixture has thickened. If things end up a little thick, just add a tablespoon of water and mix once again.",
    "source": "",
    "source_link": "",
    "servings": "2",
    "image": "drink_orange-julius.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Chocolate Chip Cookies",
    "name_slug": "chocolate-chip-cookies",
    "category": "desserts",
    "tags":  "chocolate, sweet",
    "ingredients": "1 c. plus 1T. flour\n1/2 c. white sugar\n1/2 c. brown sugar\n1/2 t. baking powder\n1/2 t. baking soda\n1/4 t. salt\n1/2 c. butter\n1 egg\n1/4 t. vanilla\n3/4 c. rolled oats\n3/4 c. chocolate chips",
    "directions": "Preheat oven to 375&#8457;.\nCream butter and sugars with spoon or mixer. Add egg and vanilla, and beat well. Stir in flour, baking powder, soda, and salt. Stir in rolled oats and chocolate chips.\nForm dough into balls. Place on ungreased cookie sheet. Bake at 375&#8457; for 10-12 minutes.",
    "source": "",
    "source_link": "",
    "servings": "36 cookies",
    "image": "dessert_chocolate-chip-cookies.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Cream of Tomato Soup",
    "name_slug": "cream-of-tomato-soup",
    "category": "soups",
    "tags": "tomato, cream",
    "ingredients": "4 T. butter\n1 large, thinly sliced onion\n3 chopped carrots\n6 cloves chopped garlic\n1 28-ounce can of tomatoes in juice\n8 large fresh basil leaves\n2-4 T. sugar\nSalt and pepper to taste\n4 c. chicken stock\n1/2 t. allspice\n2c. heavy whipping cream",
    "directions": "Melt the butter in a large soup pot. Add the onions, carrots, and garlic. Cook over medium heat until the vegetables have wilted (approx. 10 minutes).\nAdd the tomatoes and their juice, basil, sugar and salt and pepper. Cook for 5 minutes. Then add the stock and allspice, and slowly bring to a boil. Reduce the heat, partially cover, and simmer for 50 minutes.\nPure&eacute; the soup in batches in a blender or food processor. Return it to the pot, add the cream, and adjust the seasoning, and heat through.",
    "source": "",
    "source_link": "",
    "servings": "8-10 portions",
    "image": "soup_cream-of-tomato.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Pesto",
    "name_slug": "pesto",
    "category": "appetizers",
    "tags": "spread, basil, Italian",
    "ingredients": "1 c. loosely packed basil leaves\n3 T. pine nuts\n2 cloves garlic\n1/2 t. salt\n1 T. freshly grated parmesan/romano cheese\n2 T. olive oil",
    "directions": "Chop basil leaves, pine nuts, garlic, and salt in a food processor. Add cheese and olive oil and mix by hand. Add additional salt and olive oil as needed.",
    "source": "",
    "source_link": "",
    "servings": "1/2 cup",
    "image": "appetizer_pesto.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Popovers",
    "name_slug": "popovers",
    "category": "sides",
    "tags": "bread",
    "ingredients": "3 T. melted butter\n2 large eggs\n1 c. whole milk\n1 t. sugar\n3/4 t. salt\n1 c. all-purpose flour",
    "directions": "Heat the oven to 425&#8457;. Oil each well of a 12-well muffin pan; set aside.\nStir together the butter, eggs, milk, sugar, and salt until smooth. Add the flour and blend until just smooth. Let the mixture rest for a few minutes.\nPlace the prepared muffin pan in the oven on the heated baking sheet and bake until the oil sizzles, about 2 to 3 minutes. Remove the muffin pan and fill the wells of the muffin pan halfway up with batter. Return the muffin pan and baking sheet to the oven. \nBake until the popovers are puffed and the tops are starting to brown, about 20 minutes. (Do not open the oven door while the popovers cook.) Reduce the oven temperature to 350&#8457; and bake until the popovers are golden brown all over, about 15 minutes more. Remove the popovers from the pan and serve immediately.",
    "source": "",
    "source_link": "",
    "servings": "6 popovers",
    "image": "side_popovers.jpg",
    "image_fullrecipe": ""
  },
  {
    "name": "Salad With Balsamic-Glazed Prosciutto",
    "name_slug": "salad-with-balsamic-glazed-prosciutto",
    "category": "salads",
    "tags": "greens",
    "ingredients": "5 T. balsamic vinegar\n3 T. red wine vinegar\n1-1/2 t. Dijon mustard\n1/4 c. extra-virgin olive oil\nSalt\nFreshly ground pepper\n10 c. varied greens\n2 chopped hard-cooked eggs\n5 T. butter\n6 oz. thinly sliced prosciutto cut into 1/2-inch-wide ribbons",
    "directions": "In a large bowl, whisk 1 tablespoon each of both vinegars with the mustard. Whisk in 2 tablespoons of the olive oil and season with salt and pepper. Add the greens and chopped eggs but don't toss.\nIn a large skillet, melt 2 tablespoons of the butter in the remaining 2 tablespoons of oil. Cook over moderately high heat until the butter begins to brown, about 1 minute. Add the prosciutto and cook, stirring occasionally, until crisp, 2 to 3 minutes. Add the remaining 1/4 cup of balsamic vinegar and 2 tablespoons of red wine vinegar and cook until slightly reduced, about 2 minutes. Remove from the heat. Swirl in the remaining 3 tablespoons of butter until melted.\nToss the greens, season with salt and pepper and transfer to plates. Spoon the hot dressing over the greens and serve.",
    "source": "Food & Wine",
    "source_link": "http://www.foodandwine.com/recipes/salad-of-bitter-greens-with-balsamic-glazed-prosciutto",
    "servings": "6",
    "image": "salad_balsamic-glazed-prosciutto.jpg",
    "image_fullrecipe": ""
  }
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS recipes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      name_slug TEXT NOT NULL UNIQUE,
      category TEXT NOT NULL,
      tags TEXT NOT NULL,
      ingredients TEXT NOT NULL,
      directions TEXT NOT NULL,
      source TEXT NOT NULL,
      source_link TEXT NOT NULL,
      servings TEXT NOT NULL,
      image TEXT NOT NULL,
      image_fullrecipe TEXT NOT NULL
  )
`).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO recipes VALUES (
        null,
        @name,
        @name_slug,
        @category,
        @tags,
        @ingredients,
        @directions,
        @source,
        @source_link,
        @servings,
        @image,
        @image_fullrecipe
    )
  `);

  for (const recipe of dummyRecipes) {
    stmt.run(recipe);
  }
}

initData();