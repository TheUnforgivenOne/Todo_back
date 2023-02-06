import React, { FC } from 'react';
import * as S from './styles';

interface IFilters {
  total: number;
  totalCompleted: number;
  filter: boolean | null;
  setFilter: (type: boolean | null) => void;
}

const Filters: FC<IFilters> = ({
  total,
  totalCompleted,
  filter,
  setFilter,
}) => {
  return (
    <S.Container>
      <S.FilterItem selected={filter === null} onClick={() => setFilter(null)}>
        All ({total})
      </S.FilterItem>
      <S.FilterItem
        selected={filter === false}
        onClick={() => setFilter(false)}
      >
        Uncompleted ({total - totalCompleted})
      </S.FilterItem>
      <S.FilterItem selected={filter === true} onClick={() => setFilter(true)}>
        Completed ({totalCompleted})
      </S.FilterItem>
    </S.Container>
  );
};

export default Filters;
