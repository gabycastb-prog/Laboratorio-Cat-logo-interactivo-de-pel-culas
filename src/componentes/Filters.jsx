function Filters(props) {
    const genres = props.movies
    .map((movie) => movie.genre)
    .filter((genre, index, list) => list.indexOf(genre) === index)

  const years = props.movies
    .map((movie) => movie.year)
    .filter((year, index, list) => list.indexOf(year) === index)
    .sort((a, b) => b - a)

  return (
    <section className="flex flex-wrap gap-4 mb-8">
      <div className="flex flex-col gap-1">
        <label htmlFor="genero" className="text-sm text-neutral-400">Género</label>
        <select
          id="genero"
          value={props.filters.genre}
          onChange={(event) => props.onFiltersChange({ ...props.filters, genre: event.target.value })}
          className="bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2"
        >
          <option value="all">Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="anio" className="text-sm text-neutral-400">Año</label>
        <select
          id="anio"
          value={props.filters.year}
          onChange={(event) => props.onFiltersChange({ ...props.filters, year: event.target.value })}
          className="bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2"
        >
          <option value="all">Todos</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="calificacion" className="text-sm text-neutral-400">Calificación mínima</label>
        <select
          id="calificacion"
          value={props.filters.minRating}
          onChange={(event) => props.onFiltersChange({ ...props.filters, minRating: Number(event.target.value) })}
          className="bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2"
        >
          <option value={0}>Todas</option>
          <option value={7}>7 o más</option>
          <option value={7.5}>7.5 o más</option>
          <option value={8}>8 o más</option>
          <option value={8.5}>8.5 o más</option>
        </select>
      </div>
      <label className="flex items-center gap-2 self-end py-2 cursor-pointer">
        <input
          type="checkbox"
          checked={props.filters.onlyFavorites}
          onChange={(event) => props.onFiltersChange({ ...props.filters, onlyFavorites: event.target.checked })}
          className="w-4 h-4 accent-red-600"
        />
        Solo favoritas
      </label>
    </section>
  )
}

export default Filters