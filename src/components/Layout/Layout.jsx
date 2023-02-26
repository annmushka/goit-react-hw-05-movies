import { Outlet } from 'react-router-dom';

import { HeaderStyled, Main, Nav, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <HeaderStyled>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </HeaderStyled>

      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
