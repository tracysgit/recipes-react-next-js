# React-Next Recipes

## To Do

- Add a search bar
- Render Home page recipes as cards or list
- Make recipes editable
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
- Slugify: npm install slugify
- HTML Parser: npm install html-react-parser --save
- DB: "npm install better-sqlite3", start with initdb.js in root folder, then "node initdb.js"
- Authentication: "npm install next-auth@beta" 
- Generate a secret key: "openssl rand -base64 32"