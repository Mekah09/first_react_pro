import {createContext,useState, useContext, useEffect} from "react";
import { MdOutlineAirlineSeatIndividualSuite } from "react-icons/md";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)


export const MovieProvider = ({children}) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites")

    if(storedFavs) setFavorites(JSON.parse(storedFavs))
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])


  const addToFavorites = (movie) => {
    setFavorites(prev => [...prev, movie]) //update state to add favorites
  }

  const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter  (movie => movie.id !== movieId)) //it generates a new array of movies that are not the one we want to remove
  }

  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId)
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  } //to make it acessible to any of the children wrap in the provider

  //value={value} is the key word that made it accessable
  return <MovieContext.Provider value={value}> 
    {children}
  </MovieContext.Provider>
}