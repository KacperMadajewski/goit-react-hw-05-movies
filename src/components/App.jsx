import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SharedLayout } from './SharedLayouts/SharedLayouts';
import { Home } from 'pages/Home/Home';
import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import { Movies } from 'pages/Movies/Movies';
import { fetchTrendingMovies } from 'utilis/fetchTrendingMovies';
import { Cast } from '../components/Cast/Cast';
import { Review } from '../components/Review/Review';

export const App = () => {
  const [, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(resp => {
      setTrendingMovies([...resp.data.results]);
    });
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path="" />
          </Route>
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
