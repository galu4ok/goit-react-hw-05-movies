const { Link, useLocation } = require('react-router-dom');

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, original_name, backdrop_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <h2>{title ?? original_name}</h2>
            <img src={`${IMG_URL}${backdrop_path}`} alt={`${title}`} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
