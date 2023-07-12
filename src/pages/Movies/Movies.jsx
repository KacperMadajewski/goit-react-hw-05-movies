import React from 'react';
import { useState } from 'react';
import { MoviesList } from 'pages/MoviesList/MoviesList';
import { useNavigate } from 'react-router-dom';
import styles from './Movies.module.css';

export const Movies = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isRender, setIsRender] = useState(false);

  const handleChange = ev => {
    ev.preventDefault();
    setQuery(ev.target.value);
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    navigate(`/movies?query=${query}`);
    setIsRender(true);
  };

  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Write name of your film..."
          onChange={handleChange}
        />
        <button className={styles.formBtn} type="submit">
          Search
        </button>
      </form>

      {isRender ? <MoviesList query={query} /> : null}
    </div>
  );
};
