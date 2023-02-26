import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieQuery } from 'services/api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import { MovieItem } from 'components/MovieItem/MovieItem';

const SearchMovies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === null) return;

    async function getMovies() {
      setIsLoading(true);
      try {
        const movie = await searchMovieQuery(searchQuery);

        setMovies(movie.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies(searchQuery);
  }, [searchQuery]);

  const onSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <SearchForm defaultValue={searchQuery} onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {error !== null && <p>There are no movies for your request {error}</p>}
      <ul>
        {movies !== null &&
          movies.map(movie => {
            return <MovieItem movie={movie} key={movie.id} />;
          })}
      </ul>
    </div>
  );
};

export default SearchMovies;
