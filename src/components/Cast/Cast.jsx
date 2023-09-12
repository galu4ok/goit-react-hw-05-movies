import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/Api';

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function loadMovieCredits() {
      try {
        const movieCredits = await getMovieCredits(movieId);
        setCredits(movieCredits);
      } catch (error) {
        console.log(error);
      }
    }

    loadMovieCredits();
  }, [movieId]);

  return (
    <section>
      <ul>
        {credits &&
          credits.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `${IMG_URL + profile_path}`
                    : 'https://cdn.icon-icons.com/icons2/11/PNG/256/actor_oscar_person_people_man_1681.png'
                }
                alt={name}
              />
              <h3>{name}</h3>
              <p>
                Character: <b>{character}</b>
              </p>
              <hr />
            </li>
          ))}
      </ul>
    </section>
  );
};
export default Cast;
