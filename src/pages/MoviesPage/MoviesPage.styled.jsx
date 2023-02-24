// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PostsList = styled.ul`
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
