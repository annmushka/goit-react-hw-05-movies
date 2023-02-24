import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './Layout.styled';

export function Layout() {
  return (
    <>
      <header>
        <nav>
          <StyledNavLink to="/">HomePage</StyledNavLink>
          <StyledNavLink to="/movies">MoviesPage</StyledNavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
