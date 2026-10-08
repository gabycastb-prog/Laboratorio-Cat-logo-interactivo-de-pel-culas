import StarRating from './StarRating'

function MovieDetail(props) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <article className="bg-neutral-900 rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row">
        <img
          src={props.movie.image}
          alt={props.movie.title}
          className="w-full md:w-1/3 object-cover"
        />
        <div className="p-6 flex flex-col gap-3 md:w-2/3">
          <h2 className="text-3xl font-bold">{props.movie.title}</h2>
          <p className="text-neutral-400">
            {props.movie.genre} · {props.movie.year}
          </p>
          <p className="text-yellow-400 font-bold">
            Calificación: {props.movie.rating} / 10
          </p>
          <p className="text-neutral-300">{props.movie.description}</p>
          <div>
            <p className="text-sm text-neutral-400 mb-1">Tu calificación</p>
            <StarRating
              value={props.userRating}
              onRate={(valor) => props.onRate(props.movie.id, valor)}
            />
          </div>
          <button
           onClick={() => props.onToggleFavorite(props.movie.id)}
           className={
              props.isFavorite
                ? "mt-auto bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 rounded-lg"
                : "mt-auto border border-neutral-600 hover:border-white text-white font-bold py-2 rounded-lg"
            }
          >
            {props.isFavorite ? "Quitar de favoritas" : "Agregar a favoritas"}
          </button>
          <button
            onClick={props.onClose}
            className="bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-2 rounded-lg"
          >
            Cerrar
          </button>
        </div>
      </article>
    </div>
  )
}

export default MovieDetail