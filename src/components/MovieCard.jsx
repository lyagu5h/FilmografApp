import React from 'react'

function MovieCard({movie, isFavourite, onToggleFavourite}) {

  return (
    <div>
        <img src={movie.image} alt="" />
        <h3>{movie.title}</h3>
        <p>{movie.tag}</p>
        <p>{movie.duration}</p>
        <button onClick = {() => onToggleFavourite(movie)}>
            {isFavourite ? "Убрать из избранного" : "Добавить в избранное"}
        </button>
    </div>
  )
}

export default MovieCard
