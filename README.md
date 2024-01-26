# React-Next Recipes

## To Do

- How to clean DB and delete recipes
- Add a search bar
- Render Home page recipes as cards or list
- Add print, back, and share buttons
- Make navigation hamburger accessible
- Add typescript
- Dark Mode

## Features

- Built on React-Next.js and deployed on Vercel
- Recipe data is stored in a local SQLite3 database
- Built with accessibility in mind
- Uses tailwinds CSS

## Installation

- Node.js 18.17.0 or later is required (check with "node -v").
- To run dev: "npm install" then "npm run dev"
- Clsx: npm install --save clsx
- Slugify & XSS: "npm install slugify xss"
- HTML Parser: npm install html-react-parser --save
- DB: "npm install better-sqlite3", start with initdb.js in root folder, then "node initdb.js"
- To clear the DB, remove the recipes.db file, and run "node initdb.js" to create a new DB.