import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadMovieReviews() {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.log(error);
      }
    }

    loadMovieReviews();
  }, [movieId]);

  return (
    <section>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>
                Author: <b>{author}</b>
              </h4>
              <p>{content}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Reviews;
