import SearchBar from './SearchBar'

function Header(props) {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <h1 className="text-3xl font-bold text-red-600">Catálogo de películas</h1>
      <SearchBar query={props.query} onQueryChange={props.onQueryChange} />
    </header>
  )
}

export default Header