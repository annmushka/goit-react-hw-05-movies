import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_URL = 'ea186e3135adec0d288937ca4b24b3fb';

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${KEY_URL}`
  );

  return data;
};

export const searchMovieQuery = async (query, page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY_URL}&query=${query}&page=${page}`
  );

  return data;
};

export const requestMovieDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/search/${movieId}?api_key=${KEY_URL}`
  );

  return data;
};

export const requestMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY_URL}`
  );

  return data;
};
export const requestMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/search/${movieId}/reviws?api_key=${KEY_URL}`
  );

  return data;
};
