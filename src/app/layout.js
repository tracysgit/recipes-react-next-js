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
      <body className="">
        <Header />        
        <div className="px-4 md:px-6 py-6 md:py-10 lg:py-12">
          <main className="maxwidth-site flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
