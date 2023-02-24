import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  display: flex;
  flex-basis: 60%;
  flex-grow: 1;
  flex-shrink: 1;
  padding-left: 0;
  padding-right: 7px;
  flex-direction: column;
  list-style-type: none;
  & button {
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
  }
  & li {
    padding: 15px;
    border: 2px solid gray;
    transition: all 0.3s;
    margin-bottom: 15px;
    &.selected {
      border: 2px solid yellow;
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 300;
  color: red;
`;
