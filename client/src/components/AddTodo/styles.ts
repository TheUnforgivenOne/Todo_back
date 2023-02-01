import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const Input = styled.input`
  flex-grow: 1;
  border: 1px solid black;
  border-radius: 4px;
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
