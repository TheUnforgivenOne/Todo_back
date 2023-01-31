import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid black;
  padding: 2px 8px;
`;

export const AddButton = styled.button`
  border-radius: 4px;
  background-color: white;
  border: 1px solid black;

  :hover {
    background-color: lightgreen;
  }
`;
