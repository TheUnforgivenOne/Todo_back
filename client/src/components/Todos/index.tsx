import React, { FC, useEffect, useState } from 'react';
import RequestsBuilder from '../../fetchUtils/RequestsBuilder';
import AddTodo from '../AddTodo';

import { TodoType } from '../../types';

import * as Styled from './styles';
import TodoList from '../TodoList';

const Todos: FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchTodos = async () => {
    const data = await RequestsBuilder.get({ endpoint: '/todos' });
    setTodos(data.todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Styled.Container>
      <Styled.Title>Todos App</Styled.Title>
      <AddTodo fetchTodos={fetchTodos} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </Styled.Container>
  );
};

export default Todos;
