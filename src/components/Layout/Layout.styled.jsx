import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 50px;
  background-color: pink;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: left;
  gap: 50px;
  padding-left: 50px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 0;
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    color: deepPink;
  }
  &.active {
    text-decoration: underline;
  }
`;
export const Main = styled.main`
  padding: 10px 20px 20px;
`;
