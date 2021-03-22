import React from 'react';
import {
  moviesContainer,
  movieStyle,
  movieTitle,
  movieInfo,
  movieRating,
  purpleRating,
  blackRating
} from './MovieList.module.scss';

const createRating = rating => {
  const MAX = 5;
  const movieRating = Math.round(rating / 2);

  return (
    <>
      <span className={purpleRating}>{'★'.repeat(movieRating)}</span>
      <span className={blackRating}>{'★'.repeat(MAX - movieRating)}</span>
    </>
  );
};

export default function MovieList({ movies }) {
  console.log(movies);
  return (
    <>
      <ul className={moviesContainer}>
        {movies.map(movie => (
          <>
            <li key={movie.id} className={movieStyle}>
              <img src={movie.small_cover_image} alt={movie.title} />
              <span className={movieTitle}>{movie.title}</span>
              <span
                className={movieInfo}
              >{`${movie.year} | ${movie.genres}`}</span>
              <span className={movieRating}>{createRating(movie.rating)}</span>
              {/* <span className={movieSummary}>{movie.summary}</span> */}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
