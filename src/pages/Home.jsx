import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'components/Api';
import { useState, useEffect } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function loadTrendingMovies() {
      try {
        const movies = await getTrendingMovies();

        if (movies.length) {
          setTrendingMovies(movies);
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadTrendingMovies();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </section>
  );
};

export default Home;
