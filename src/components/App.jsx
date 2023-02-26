import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const LazyLayout = lazy(() => import('components/Layout/Layout'));
const LazyHome = lazy(() => import('pages/HomePage/HomePage'));
const LazySearchMovies = lazy(() => import('pages/MoviesPage/MoviesPage'));
const LazyMovieDetails = lazy(() =>
  import('pages/MoviesDetailsPage/MovieDetails')
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyLayout />}>
            <Route index element={<LazyHome />} />
            <Route path="/movies" element={<LazySearchMovies />} />
            <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </>
  );
};
