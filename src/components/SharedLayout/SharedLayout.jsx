import { Suspense } from 'react';
import { ImHome } from 'react-icons/im';
import { ImFilm } from 'react-icons/im';
import { Outlet } from 'react-router-dom';
import { Container, Header, Navigation, NavList } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavList>
            <li>
              <ImHome size={25} />
              <Navigation to="/">Home</Navigation>
            </li>
            <li>
              <ImFilm size={25} />
              <Navigation to="/movies">Movies</Navigation>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
