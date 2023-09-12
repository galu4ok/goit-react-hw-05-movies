import { Link, Outlet } from 'react-router-dom';

const MovieInfo = () => {
  return (
    <>
      <hr />
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};
export default MovieInfo;
