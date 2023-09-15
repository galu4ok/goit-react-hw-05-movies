import { ImArrowLeft } from 'react-icons/im';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { useEffect } from 'react';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import MovieCard from 'components/MovieCard/MovieCard';
import { GoBackButton } from 'components/SharedLayout/SharedLayout.styled';
import { getMovieById } from 'components/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function loadMovieDetails() {
      try {
        const movie = await getMovieById(movieId);
        setSelectedMovie(movie);
      } catch (error) {
        console.log(error);
      }
    }

    loadMovieDetails();
  }, [movieId]);

  if (!selectedMovie) {
    return <RotatingLines width="80" strokeColor="#3f51b5" />;
  }

  return (
    <section>
      <GoBackButton to={backLinkHref}>
        <ImArrowLeft />
        Go back
      </GoBackButton>
      <MovieCard movie={selectedMovie} />
      <MovieInfo movie={selectedMovie} />
    </section>
  );
};
export default MovieDetails;
