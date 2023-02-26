import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Item, MovieTitle, StyledLink } from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
  const location = useLocation();

  return (
    <Item>
      <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <MovieTitle>{movie.title}</MovieTitle>
      </StyledLink>
    </Item>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};
