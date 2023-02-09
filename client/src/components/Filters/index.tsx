import React, { FC } from 'react';
import { setStateFnType } from '../../types';
import * as S from './styles';

interface IFilters {
  total: number;
  totalCompleted: number;
  currentUser: string | null;
  onlyMy: boolean;
  filter: boolean | null;
  setOnlyMy: setStateFnType<boolean>;
  setFilter: setStateFnType<boolean | null>;
}

const Filters: FC<IFilters> = ({
  total,
  totalCompleted,
  currentUser,
  onlyMy,
  filter,
  setOnlyMy,
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
      {currentUser && (
        <S.FilterItem
          selected={onlyMy}
          onClick={() => setOnlyMy((prev) => !prev)}
        >
          Only my
        </S.FilterItem>
      )}
    </S.Container>
  );
};

export default Filters;
