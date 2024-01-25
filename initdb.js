const sql = require('better-sqlite3');
const db = sql('recipes.db');

const dummyRecipes = [
  {
    "name": "Dutch Baby",
    "name_slug": "dutch-baby",
    "category": "desserts",
    "tags": [
      "dessert",
      "pancake",
      "sweet"
    ],
    "ingredients": "3 large eggs, at room temperature\n1/2 c. all-purpose flour\n1/2 c. whole milk, at room temperature\n1 T. sugar\nPinch of nutmeg\n4 T. unsalted butter\nConfectioner's sugar",
    "directions": "Preheat oven to 425&#8457;.\nCombine eggs, flour, milk, sugar, and nutmeg, and blend until smooth.\nPlace butter in a heavy 10-inch skillet and place in the oven. When butter has melted, add batter to the pan. Return the pan to the oven and bake for 20 minutes, until the pancake is puffed and golden. Lower oven temperature to 300&#8457; and bake five minutes longer.\nSprinkle with confectioner's sugar before serving.",
    "source": "New York Times",
    "source_link": "https://cooking.nytimes.com/recipes/6648-dutch-baby",
    "servings": "3 to 4",
    "image": "dessert_dutch-baby",
    "image_fullrecipe": ""
  }
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS recipes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      name_slug TEXT NOT NULL UNIQUE,
      category TEXT NOT NULL,
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