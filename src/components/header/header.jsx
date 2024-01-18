import NavMain from './nav-main';
import Search from './search';

export default function Header() {
  return (
    <header className="bg-blue-800 px-4 md:px-6 text-white">
      <div className="maxwidth-site flex md:flex-row flex-col justify-between items-center gap-4">
        <NavMain />
        <Search />
      </div>
    </header>
  )
}
