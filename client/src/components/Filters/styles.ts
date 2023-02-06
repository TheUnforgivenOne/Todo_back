import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  cursor: pointer;
`;

export const FilterItem = styled.span<{ selected?: boolean }>`
  margin-left: 8px;
  color: ${(props) => (props.selected ? 'red' : 'blue')};

  :hover {
    color: lightsalmon;
  }
`;
