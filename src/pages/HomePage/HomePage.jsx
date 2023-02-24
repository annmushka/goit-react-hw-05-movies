// import Item from 'components/ListItem/Item';
import React, { useEffect, useState } from 'react';
import { requestTrendingMovies } from 'services/api';

// import { MoviesList } from './HomePages.styled';
import { Title, MoviesList } from './HomePages.styled';
import { MoviesItem } from '../../components/ListItem/MoviesItem';

export function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const movies = await requestTrendingMovies();
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MoviesList>
        {movies !== null &&
          movies.map(movie => {
            return <MoviesItem {...movies} key={movie.id} />;
          })}
      </MoviesList>
    </>
  );
}
