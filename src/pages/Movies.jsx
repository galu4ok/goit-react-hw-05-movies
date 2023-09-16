import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchMovies } from 'components/Api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //при першому рендері (коли query пустий рядок) не робимо запит
    if (!query) {
      return;
    }
    async function loadMovies() {
      try {
        setIsLoading(true);
        const searchedMovies = await getSearchMovies(query);
        setMovies(searchedMovies);
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadMovies();
  }, [query]);
  const changeQuery = newQuery => {
    setQuery(newQuery);
    setSearchParams(newQuery);
    //очищаємо при сабміті форми попередню колекцію фільмів
    setMovies([]);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const enteredQuery = evt.target.elements.query.value.trim();
    const updatedParams = enteredQuery !== '' ? { query: enteredQuery } : {};

    if (!enteredQuery) {
      toast.error(
        'Sorry, there are no results on your query request. Please, try again!'
      );
      return;
    }
    changeQuery(enteredQuery);
    setSearchParams(updatedParams);
    evt.target.reset();
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <RotatingLines width="80" strokeColor="#3f51b5" />}
      {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};
export default Movies;
