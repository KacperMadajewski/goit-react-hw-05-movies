import { useEffect, useState } from 'react';
import { fetchSearchMovies } from 'utilis/fetchSearchMovies';
import { Link } from 'react-router-dom';
import styles from './MoviesList.module.css';

export const MoviesList = ({ query }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    fetchSearchMovies(query).then(resp => {
      setSearchedMovies([...resp]);
    });
  }, [searchedMovies, query]);

  return (
    <ul className={styles.moviesListContainer}>
      {searchedMovies.map(searchedMovie => (
        <Link
          className={styles.moviesListLinks}
          key={searchedMovie.id}
          to={`${searchedMovie.id}`}
        >
          <li key={searchedMovie.id}>{searchedMovie.title}</li>
        </Link>
      ))}
    </ul>
  );
};
