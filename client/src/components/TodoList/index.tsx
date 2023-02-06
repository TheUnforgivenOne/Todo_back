import React, { FC } from 'react';

import Todo from '../Todo';
import { PriorityDictType, TodoType } from '../../types';

import * as S from './styles';

interface ITodoList {
  todos: TodoType[];
  priorityDict: PriorityDictType;
  fetchTodos: () => void;
}

const TodoList: FC<ITodoList> = ({ todos, priorityDict, fetchTodos }) => {
  return (
    <S.List>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          priorityDict={priorityDict}
          fetchTodos={fetchTodos}
        />
      ))}
    </S.List>
  );
};

export default TodoList;
