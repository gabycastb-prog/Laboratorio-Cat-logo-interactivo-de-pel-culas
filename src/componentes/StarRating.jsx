function StarRating(props) {
  const estrellas = [1, 2, 3, 4, 5]

  return (
    <div className="flex items-center gap-1">
      {estrellas.map((numero) => (
        <button
          key={numero}
          onClick={() => props.onRate(numero)}
          className={
            numero <= props.value
              ? "text-yellow-400 hover:scale-110 transition"
              : "text-neutral-600 hover:text-yellow-200 hover:scale-110 transition"
          }
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" />
          </svg>
        </button>
      ))}
      <span className="text-sm text-neutral-400 ml-2">
        {props.value > 0 ? props.value + "/5" : "Sin calificar"}
      </span>
    </div>
  )
}

export default StarRating