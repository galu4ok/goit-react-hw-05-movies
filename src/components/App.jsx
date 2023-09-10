import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

//Routing:
//'/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
//'/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
//'/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
///movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
///movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
