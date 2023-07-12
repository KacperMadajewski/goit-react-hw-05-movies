import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'utilis/fetchTrendingMovies';
import styles from './Home.module.css';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(resp => {
      setTrendingMovies([...resp.data.results]);
    });
  }, []);

  const location = useLocation();

  return (
    <div className={styles.homeContainer}>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(trendingMovie => (
          <Link
            className={styles.homeLinks}
            key={trendingMovie.id}
            to={`movies/${trendingMovie.id}`}
            state={{ from: location }}
          >
            <li key={trendingMovie.id}>
              {trendingMovie.title || trendingMovie.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
