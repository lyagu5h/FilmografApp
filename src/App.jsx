import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MovieList from './components/MovieList'
import { useState } from 'react'
import Favourites from './components/Favourites'

function App() {
  const [favourites, setFavourites] = useState([]);

  const toogleFavourite = (movieId) => {
    if (favourites.includes(movieId)) {
      setFavourites(favourites.filter((id) => id !== movieId));
    } else {
      setFavourites([...favourites, movieId]);
    }
  } 

  return (
    <>
      <Header />
      {/* TODO: create router */}
      <Favourites favourites={favourites}/>
      {/* TODO: create movie list */}
      <MovieList onToogleFavourite={toogleFavourite} favourites={favourites} movies={[]}/>
      <Footer />
    </>
  )
}

export default App
