import { useState, useEffect } from 'react';
import { requestTrendingMovies } from 'services/api';
import Loader from 'components/Loader/Loader';
import { MovieItem } from 'components/MovieItem/MovieItem';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const movies = await requestTrendingMovies();
        setMovies(movies.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <h1>Trending today</h1>
      <ul>
        {movies !== null &&
          movies.map(movie => {
            return <MovieItem movie={movie} key={movie.id} />;
          })}
      </ul>
    </>
  );
};

export default Home;
