import axios from 'axios';

export const fetchReviewMovies = movieId => {
  const response = axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7df6e17d7ffcad92df7ac730e6418a89`
    )
    .then(resp => resp.data.results)
    .catch(error => console.log(error));

  return response;
};
