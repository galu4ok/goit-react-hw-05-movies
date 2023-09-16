import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieInfo = () => {
  const location = useLocation();
  return (
    <>
      <hr />
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast" state={{ from: location.state?.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};
export default MovieInfo;
