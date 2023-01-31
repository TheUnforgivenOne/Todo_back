import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 150px;
  overflow: hidden;
`;

export const DeleteButton = styled.button`
  margin-left: auto;
  background-color: white;
  color: red;
  border-radius: 50%;
  border: 1px solid black;

  :hover {
    background-color: lightpink;
  }
`;
