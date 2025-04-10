import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ onToogleFavourite, movies, favourites }) => {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavourite={!!favourites.find((favMovie) => favMovie === movie.id)}
            onToggleFavourite={onToogleFavourite}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
