import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Item, MovieTitle, Poster, StyledLink } from './MovieItem.styled';

export const MoviesItem = ({ movie }) => {
  const location = useLocation();
  //   console.log(location);

  return (
    <Item>
      <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <MovieTitle>{movie.title}</MovieTitle>
        <Poster
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
              : 'http://placehold.it/200x300'
          }
          alt={movie.title}
        />
      </StyledLink>
    </Item>
  );
};

MoviesItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }),
};
