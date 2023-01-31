import React, { FC } from 'react';

import { TodoType } from '../../types';
import Todo from '../Todo';

import * as Styled from './styles';

interface ITodoList {
  todos: TodoType[];
  fetchTodos: () => void;
}

const TodoList: FC<ITodoList> = ({ todos, fetchTodos }) => {
  return (
    <Styled.List>
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </Styled.List>
  );
};

export default TodoList;
