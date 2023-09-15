import { MoviesDescr, Wrapper } from './MovieCard.styled';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <Wrapper>
      <img src={`${IMG_URL}${poster_path}`} alt={`${title}`} height="500" />
      <MoviesDescr>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>User score: {Math.floor(vote_average * 10)}%</p>

        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </MoviesDescr>
    </Wrapper>
  );
};
export default MovieCard;
