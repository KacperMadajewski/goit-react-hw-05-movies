import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchInfoMovies } from 'utilis/fetchInfoMovies';
import { useEffect, useState } from 'react';
import styles from './MoviesDetails.module.css';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();

  useEffect(() => {
    fetchInfoMovies(movieId)
      .then(resp => resp.data)
      .then(resp => {
        return setMovieInfo({ ...resp });
      });
  }, [movieId]);

  const backPage = location.state?.from ?? '/movies';

  return (
    <div className={styles.detailsContainer}>
      <Link className={styles.backLink} to={backPage}>
        <p>go back</p>
      </Link>
      <div>
        <img
          alt={`${movieInfo.title} poster`}
          src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
          width={200}
          height={400}
        />
        <ul>
          <h4>{movieInfo.title}</h4>
          <p>User score: {movieInfo.vote_average}</p>
          <h5>Overview</h5>
          <p>{movieInfo.overview}</p>
          <h6>Genres</h6>
          <ul style={{ listStyle: 'none' }}>
            {movieInfo.genres &&
              movieInfo.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
        </ul>
      </div>

      <div>
        <p>Additional information</p>
        <ul>
          <Link className={styles.detailsLinks} to="cast">
            <li>Cast</li>
          </Link>
          <Link className={styles.detailsLinks} to="reviews">
            <li>Reviews</li>
          </Link>
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
