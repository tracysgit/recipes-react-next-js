import Header from '@/components/header/header';

import './globals.css';

export const metadata = {
  // title: 'Recipes',
  title: {
    template: '%s | Recipes',
    default: 'Recipes',
  },
  description: 'A collection of favorite family recipes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="site-maxwidth flex flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}
