import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  width: calc((100% - 10px) / 3);
  box-shadow: 0px 0px 13px 1px #a39b9c;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const MovieTitle = styled.p`
  height: 40px;
  margin-bottom: 5px;
  text-align: center;
  color: black;
  font-weight: 700;
`;
