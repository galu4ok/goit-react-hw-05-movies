import { Suspense } from 'react';
import { ImHome } from 'react-icons/im';
import { ImFilm } from 'react-icons/im';
import { Outlet } from 'react-router-dom';
import { Container, Header, Navigation, NavList } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <NavList>
          <li>
            <Navigation to="/">
              <ImHome size={20} />
              Home
            </Navigation>
          </li>
          <li>
            <Navigation to="/movies">
              <ImFilm size={20} />
              Movies
            </Navigation>
          </li>
        </NavList>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
