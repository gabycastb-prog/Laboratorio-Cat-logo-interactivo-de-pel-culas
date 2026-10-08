import MovieCard from './MovieCard'

function MovieList(props) {
    if (props.movies.length === 0) {
        return (
      <p className="text-center text-neutral-400 py-16">
        No se encontraron películas con esa búsqueda o esos filtros.
      </p>
      )
    }
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {props.movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSelect={props.onSelect}
          isFavorite={props.favorites.includes(movie.id)}
          onToggleFavorite={props.onToggleFavorite}
          userRating={props.ratings[movie.id] || 0}
          onRate={props.onRate}

        />
      ))}
    </section>
  )
}

export default MovieList