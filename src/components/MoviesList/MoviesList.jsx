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
            <img
              src={
                backdrop_path
                  ? `${IMG_URL}${backdrop_path}`
                  : 'https://images.squarespace-cdn.com/content/v1/580b43a95016e1a9c82a3a32/2c28b55a-b2e2-45ae-9fef-797715b04fdf/Dark+Square.png'
              }
              alt={`${title}`}
              width="500"
              height="300"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
