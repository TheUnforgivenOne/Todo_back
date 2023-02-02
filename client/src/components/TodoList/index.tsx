import React, { FC } from 'react';

import Todo from '../Todo';
import { PriorityDictType, TodoType } from '../../types';

import * as Styled from './styles';

interface ITodoList {
  todos: TodoType[];
  priorityDict: PriorityDictType;
  fetchTodos: () => void;
}

const TodoList: FC<ITodoList> = ({ todos, priorityDict, fetchTodos }) => {
  return (
    <Styled.List>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          priorityDict={priorityDict}
          fetchTodos={fetchTodos}
        />
      ))}
    </Styled.List>
  );
};

export default TodoList;
