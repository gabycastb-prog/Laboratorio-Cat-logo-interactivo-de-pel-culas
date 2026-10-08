import { useState } from 'react'
import movies from './data/movies'
import Header from './componentes/Header'
import Filters from './componentes/Filters'
import Favorites from './componentes/Favorites'
import MovieList from './componentes/MovieList'
import MovieDetail from './componentes/MovieDetail'

function App() {
  const [query, setQuery] = useState("")
  const [filters, setFilters] = useState({
    genre: "all",
    year: "all",
    minRating: 0,
    onlyFavorites: false,
  })
  const [favorites, setFavorites] = useState([])
  const [ratings, setRatings] = useState({})
  const [selectedId, setSelectedId] = useState(null)

 
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }
   
  function rateMovie(id, valor) {
    setRatings({ ...ratings, [id]: valor })
  }

  const filteredMovies = movies.filter((movie) => {
    const coincideTitulo = movie.title.toLowerCase().includes(query.toLowerCase())
    const coincideGenero = filters.genre === "all" || movie.genre === filters.genre
    const coincideAnio = filters.year === "all" || movie.year === Number(filters.year)
    const coincideCalificacion = movie.rating >= filters.minRating
    const coincideFavorita = !filters.onlyFavorites || favorites.includes(movie.id)

    return coincideTitulo && coincideGenero && coincideAnio && coincideCalificacion && coincideFavorita
  })

  const selectedMovie = movies.find((movie) => movie.id === selectedId)

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6">
      <Header query={query} onQueryChange={setQuery} />
      <Filters movies={movies} filters={filters} onFiltersChange={setFilters} />
      <Favorites
        movies={movies}
        favorites={favorites}
        onSelect={setSelectedId}
        onToggleFavorite={toggleFavorite}
      />
      <MovieList
        movies={filteredMovies}
        favorites={favorites}
        ratings={ratings}
        onSelect={setSelectedId}
        onToggleFavorite={toggleFavorite}
        onRate={rateMovie}
      />

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          onToggleFavorite={toggleFavorite}
          userRating={ratings[selectedMovie.id] || 0}
          onRate={rateMovie}
          onClose={() => setSelectedId(null)}
        />
      )}
    </main>
  )
}

export default App