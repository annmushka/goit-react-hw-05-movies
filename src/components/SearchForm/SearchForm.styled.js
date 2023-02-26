import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 250px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px;
  background-color: lightBlue;
  color: white;
  cursor: pointer;
  border: 2px solid lightBlue;
  &:hover,
  &:focus {
    border: 2px solid deepPink;
    background-color: deepPink;
  }
`;
