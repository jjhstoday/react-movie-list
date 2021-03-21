import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loader } from './MovieMain.module.scss';
import { ReactComponent as LoadingIcon } from '../assets/loadingIcon.svg';
import MovieList from '../components/MovieList/MovieList';
import Search from '../components/Search/Search';
import SearchErrorMessage from '../components/SearchErrorMessage/SearchErrorMessage';

export default function MovieMain() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(null);

  const fetchMovies = async () => {
    try {
      setMovies(null);
      setError(null);
      setQuery(null);
      setLoading(true);
      const response = await axios.get(
        'https://yts.mx/api/v2/list_movies.json',
      );
      setMovies(response.data.data.movies);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const onKeyUp = async e => {
    if (e.keyCode !== 13) return null;
    setMovies(null);
    setError(null);
    setQuery(null);
    setLoading(true);
    const response = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?query_term=${e.target.value}`,
    );
    setMovies(response.data.data.movies);
    setLoading(false);
    setQuery(e.target.value);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <LoadingIcon className={loader} />;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!movies) {
    if (query !== null) {
      return (
        <>
          <Search onKeyUp={onKeyUp} />
          <SearchErrorMessage query={query} />
        </>
      );
    }
    return null;
  }

  return (
    <>
      <Search onKeyUp={onKeyUp} />
      <MovieList movies={movies} />
    </>
  );
}
