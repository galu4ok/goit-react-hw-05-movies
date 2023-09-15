import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesBoard = styled.ul`
  margin: -10px;
  display: flex;
  flex-wrap: wrap;
`;

export const MoviesItem = styled(Link)`
  width: 100%;
  display: flex;
  flex-basis: calc(100% / 4 - 20px);
  margin: 10px;

  a {
    text-decoration: none;
    color: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const MoviesTitle = styled.h1`
  font-size: 20px;
`;
