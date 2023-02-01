import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const Checkbox = styled.input``;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;

export const Title = styled.span`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;

export const Description = styled.span`
  word-wrap: break-word;
`;

export const Priority = styled.span`
  white-space: nowrap;
`;

export const DeleteButton = styled.button`
  background-color: white;
  color: red;
  border-radius: 50%;
  border: 1px solid black;

  :hover {
    background-color: lightpink;
  }
`;
