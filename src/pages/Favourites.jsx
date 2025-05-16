import React from 'react'

function Favourites({ favourites }) {
  return (
    <div>
        {favourites.length === 0 && <p>Тут пока ничего нет. Добавьте фильмы в избранное, чтобы они здесь появились</p>}
        {favourites.map((movie) => {
            <div key={movie.id}>{movie.title}</div>
        })}
    </div>
  )
}

export default Favourites
