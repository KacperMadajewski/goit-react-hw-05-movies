import axios from 'axios';

export const fetchSearchMovies = query => {
  const response = axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=7df6e17d7ffcad92df7ac730e6418a89&query=${query}`
    )
    .then(resp => {
      return resp.data.results;
    })
    .catch(error => {
      console.log(error);
    });

  return response;
};
