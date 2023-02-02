import React, { FC, useEffect, useState } from 'react';

import AddTodo from '../AddTodo';
import TodoList from '../TodoList';

import RequestsBuilder from '../../fetchUtils/RequestsBuilder';
import { PriorityDictType, TodoType } from '../../types';

import * as Styled from './styles';

const Todos: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [priorityDict, setPriorityDict] = useState<PriorityDictType>({});

  const fetchTodos = async () => {
    const data = await RequestsBuilder.get({ endpoint: '/todos' });
    setTodos(data.todos);
  };

  const fetchPriority = async () => {
    const data = await RequestsBuilder.get({
      endpoint: '/dictionary/priority',
    });
    setPriorityDict(data.priority);
  };

  useEffect(() => {
    fetchTodos();
    fetchPriority();
  }, []);

  return (
    <Styled.Container>
      <Styled.Title>Todos App</Styled.Title>
      <AddTodo priorityDict={priorityDict} fetchTodos={fetchTodos} />
      <TodoList
        todos={todos}
        priorityDict={priorityDict}
        fetchTodos={fetchTodos}
      />
    </Styled.Container>
  );
};

export default Todos;
