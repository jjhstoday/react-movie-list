import React from 'react';
import {
  moviesContainer,
  movieStyle,
  movieTitle,
  movieYear,
  movieSummary,
} from './MovieList.module.scss';

export default function MovieList({ movies }) {
  return (
    <>
      <ul className={moviesContainer}>
        {movies.map(movie => (
          <>
            <li key={movie.id} className={movieStyle}>
              <img src={movie.small_cover_image} alt={movie.title} />
              <span className={movieTitle}>{movie.title}</span>
              <span className={movieYear}>{movie.year}</span>
              <span className={movieSummary}>{movie.summary}</span>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
