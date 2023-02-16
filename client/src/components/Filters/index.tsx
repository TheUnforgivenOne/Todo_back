import React, { FC } from 'react';
import { FiltersType, setStateFnType } from '../../types';
import * as S from './styles';

interface IFilters {
  currentUser?: string;
  total: number;
  totalCompleted: number;
  filter: FiltersType;
  setFilter: setStateFnType<FiltersType>;
}

const Filters: FC<IFilters> = ({
  currentUser,
  total,
  totalCompleted,
  filter,
  setFilter,
}) => {
  const changeFilter = (key: string, value: boolean | null) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <S.Container>
      <S.FilterItem
        selected={filter.completed === null}
        onClick={() => changeFilter('completed', null)}
      >
        All ({total})
      </S.FilterItem>
      <S.FilterItem
        selected={filter.completed === false}
        onClick={() => changeFilter('completed', false)}
      >
        Uncompleted ({total - totalCompleted})
      </S.FilterItem>
      <S.FilterItem
        selected={filter.completed === true}
        onClick={() => changeFilter('completed', true)}
      >
        Completed ({totalCompleted})
      </S.FilterItem>
      {currentUser && (
        <S.FilterItem
          selected={filter.onlyMy}
          onClick={() => changeFilter('onlyMy', !filter.onlyMy)}
        >
          Only my
        </S.FilterItem>
      )}
    </S.Container>
  );
};

export default Filters;
