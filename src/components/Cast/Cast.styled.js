import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  list-style-type: none;
`;

export const CastItem = styled.li`
  width: calc((100% - 15px) / 4);
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 13px 1px #a39b9c;
`;
export const MovieTitle = styled.p`
  height: 50px;
  margin-bottom: 5px;
  text-align: center;
  width: 50px;
`;
