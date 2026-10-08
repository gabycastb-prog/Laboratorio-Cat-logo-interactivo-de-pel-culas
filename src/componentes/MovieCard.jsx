import StarRating from './StarRating'

function MovieCard(props) {
  return (
    <article className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
      <img
        src={props.movie.image}
        alt={props.movie.title}
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{props.movie.title}</h3>
        <p className="text-sm text-neutral-400">
          {props.movie.genre} · {props.movie.year}
        </p>
        <p className="text-sm font-bold text-yellow-400 mt-1">
          {props.movie.rating} / 10
        </p>
        <p className="text-sm text-neutral-300 mt-2 line-clamp-3">
          {props.movie.description}
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <button
            onClick={() => props.onSelect(props.movie.id)}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-2 rounded-lg"
          >
            Ver detalle
          </button>
          <button
            onClick={() => props.onToggleFavorite(props.movie.id)}
            className={
              props.isFavorite
                ? "w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm py-2 rounded-lg"
                : "w-full border border-neutral-600 hover:border-white text-white font-bold text-sm py-2 rounded-lg"
            }
          >
            {props.isFavorite ? "Quitar de favoritas" : "Agregar a favoritas"}
          </button>
        </div>
        <div className="mt-3">
          <p className="text-xs text-neutral-400 mb-1">Tu calificación</p>
          <StarRating
            value={props.userRating}
            onRate={(valor) => props.onRate(props.movie.id, valor)}
          />
        </div>
      </div>
    </article>
  )
}

export default MovieCard