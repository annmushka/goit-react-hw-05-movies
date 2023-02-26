import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;
export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: darkBlue;
  text-decoration: none;

  &:hover,
  &:focus {
    color: lightBlue;
  }
  &.active {
    text-decoration: underline;
    font-weight: 400;
  }
`;

export const GoBack = styled(Link)`
  width: 80px;
  height: 30px;
  display: flex;
  padding: 6px;
  color: darkBlue;
  text-decoration: none;
  border: 2px solid lightBlue;
  border-radius: 10px;

  &:hover,
  &:focus {
    border-radius: 10px;
    background-color: lightBlue;
  }
`;
