import React, { FC, useEffect, useState } from 'react';

import AddTodo from '../AddTodo';
import Filters from '../Filters';
import TodoList from '../TodoList';

import RequestsBuilder from '../../fetchUtils/RequestsBuilder';
import { PriorityDictType, TodoType } from '../../types';

import * as S from './styles';

const Todos: FC = () => {
  const [filter, setFilter] = useState<boolean | null>(null);
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
      query: filter !== null ? { completed: filter } : {},
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
  }, [filter]);

  useEffect(() => {
    fetchPriority();
  }, []);

  return (
    <S.Container>
      <S.Title>Todos App</S.Title>
      <AddTodo priorityDict={priorityDict} fetchTodos={fetchTodos} />
      <Filters
        total={data.total}
        totalCompleted={data.totalCompleted}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList
        todos={data.todos}
        priorityDict={priorityDict}
        fetchTodos={fetchTodos}
      />
    </S.Container>
  );
};

export default Todos;
