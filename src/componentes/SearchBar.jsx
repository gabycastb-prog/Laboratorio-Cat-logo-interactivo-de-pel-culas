function SearchBar(props) {
  return (
    <input
      type="text"
      placeholder="Buscar película por título..."
      value={props.query}
      onChange={(event) => props.onQueryChange(event.target.value)}
      className="w-full md:w-80 bg-neutral-800 text-white placeholder:text-neutral-400 px-4 py-2 
      rounded-lg border border-neutral-700 focus:outline-none focus:border-red-600"
    />
  )
}

export default SearchBar