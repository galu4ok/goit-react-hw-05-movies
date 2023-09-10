import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <section>
      <h1>MovieDetails</h1>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};
export default MovieDetails;
