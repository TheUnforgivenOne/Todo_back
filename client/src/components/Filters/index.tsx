import React, { FC } from 'react';
import { setStateFnType } from '../../types';
import * as S from './styles';

interface IFilters {
  currentUser?: string;
  total: number;
  totalCompleted: number;
  onlyMy: boolean;
  filter: boolean | null;
  setOnlyMy: setStateFnType<boolean>;
  setFilter: setStateFnType<boolean | null>;
}

const Filters: FC<IFilters> = ({
  currentUser,
  total,
  totalCompleted,
  onlyMy,
  filter,
  setOnlyMy,
  setFilter,
}) => {
  console.log(currentUser);
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
