function Favorites(props) {
  const favoriteMovies = props.movies.filter((movie) => props.favorites.includes(movie.id))

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Mis favoritas ({favoriteMovies.length})
      </h2>

      {favoriteMovies.length === 0 ? (
        <p className="text-neutral-400">Aún no tienes películas favoritas.</p>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {favoriteMovies.map((movie) => (
            <div key={movie.id} className="w-28 shrink-0">
              <img
                src={movie.image}
                alt={movie.title}
                onClick={() => props.onSelect(movie.id)}
                className="w-full aspect-[2/3] object-cover rounded-lg cursor-pointer hover:opacity-80"
              />
              <p className="text-sm mt-1 truncate">{movie.title}</p>
              <button
                onClick={() => props.onToggleFavorite(movie.id)}
                className="text-xs text-red-500 hover:underline"
              >
                Quitar
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Favorites