import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"


function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your favorites</h2>
        <div className="movies-grid">
          {favorites.map(
            (movie) =>
            (
              <Moviecard movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    )
  }

  return <div className="favourites-empty">
    <h2>No favourites Movies Yet</h2>
    <p>Start adding monies to your favourites and they will appear here</p>
  </div>
}

export default Favorites