// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// export const Title = styled.h1`
//   color: #000;
//   padding-left: 40px;
//   font-weight: 700;
//   font-size: 24px;
// `;

// export const MovieItem = styled(NavLink)`
//   font-size: 20px;
//   margin-bottom: 20px;
//   display: block;
//   color: #2b4749;
// `;
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

export const Poster = styled.img`
  width: 100%;
  object-fit: cover;
`;
