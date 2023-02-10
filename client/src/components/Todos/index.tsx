import React, { FC, useEffect, useState } from 'react';

import AddTodo from '../AddTodo';
import Filters from '../Filters';
import Auth from '../Auth';
import TodoList from '../TodoList';

import RequestsBuilder from '../../fetchUtils/RequestsBuilder';
import { PriorityDictType, TodoType } from '../../types';

import * as S from './styles';

const Todos: FC = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(
    localStorage.getItem('user')
  );
  const [filter, setFilter] = useState<boolean | null>(null);
  const [onlyMy, setOnlyMy] = useState<boolean>(false);
  const [priorityDict, setPriorityDict] = useState<PriorityDictType>({});
  const [data, setData] = useState<{
    todos: TodoType[];
    total: number;
    totalCompleted: number;
  }>({
    todos: [],
    total: 0,
    totalCompleted: 0,
  });

  const fetchTodos = async () => {
    const data = await RequestsBuilder.get({
      endpoint: '/todos',
      query: {
        ...(filter !== null ? { completed: filter } : {}),
        onlyMy,
        currentUser,
      },
    });
    setData(data);
  };

  const fetchPriority = async () => {
    const data = await RequestsBuilder.get({
      endpoint: '/dictionary/priority',
    });
    setPriorityDict(data.priority);
  };

  useEffect(() => {
    fetchTodos();
  }, [filter, onlyMy]);

  useEffect(() => {
    fetchPriority();
  }, []);

  return (
    <S.Container>
      <S.Title>Todos App</S.Title>
      <AddTodo
        currentUser={currentUser}
        priorityDict={priorityDict}
        fetchTodos={fetchTodos}
      />
      <S.Utils>
        <Filters
          total={data.total}
          totalCompleted={data.totalCompleted}
          currentUser={currentUser}
          onlyMy={onlyMy}
          filter={filter}
          setOnlyMy={setOnlyMy}
          setFilter={setFilter}
        />
        <Auth currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </S.Utils>
      <TodoList
        todos={data.todos}
        priorityDict={priorityDict}
        fetchTodos={fetchTodos}
      />
    </S.Container>
  );
};

export default Todos;
