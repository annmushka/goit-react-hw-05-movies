import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieReviews } from 'services/api';
import Loader from 'components/Loader/Loader';
import { ReviewsItem, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async movieId => {
      setIsLoading(true);
      try {
        const movieReviews = await requestMovieReviews(movieId);
        setMovieReviews(movieReviews.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId === null) return;

    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movieReviews.length > 0 ? (
        <ReviewsList>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <ReviewsItem key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <p>There are no reviews for this film yet</p>
      )}
    </>
  );
};

export default Reviews;
