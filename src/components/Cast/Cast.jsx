import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieCast } from 'services/api';
import Loader from 'components/Loader/Loader';
import { CastItem, CastList, MovieTitle } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async movieId => {
      setIsLoading(true);
      try {
        const movieCast = await requestMovieCast(movieId);
        setMovieCast(movieCast.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId === null) return;

    fetchMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <CastList>
        {movieCast.map(({ id, name, profile_path }) => {
          return (
            <CastItem key={id}>
              <MovieTitle>{name}</MovieTitle>
              {Boolean(profile_path) && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt="{name}"
                />
              )}
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

export default Cast;
