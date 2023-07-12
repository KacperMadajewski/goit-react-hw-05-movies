import axios from 'axios';

export const fetchTrendingMovies = () => {
  const response = axios
    .get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=7df6e17d7ffcad92df7ac730e6418a89'
    )
    .then(resp => {
      return resp;
    })
    .catch(error => {
      console.log(error);
    });
  return response;
};
