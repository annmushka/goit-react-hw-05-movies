import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovieQuery } from 'services/api';

import { MoviesItem } from 'components/ListItem/MoviesItem';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { PostsList } from 'pages/MoviesPage/MoviesPage.styled';

export function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === null) return;

    async function getMovies(query) {
      try {
        setIsLoading(true);

        const { result } = await searchMovieQuery(searchQuery);

        setMovies(result);
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
      <PostsList>
        {movies !== null &&
          movies.map(post => {
            return <MoviesItem location={location} {...post} key={post.id} />;
          })}
      </PostsList>
    </div>
  );
}
