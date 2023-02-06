import React, { FC } from 'react';
import RequestsBuilder from '../../fetchUtils/RequestsBuilder';

import { PriorityDictType, TodoType } from '../../types';

import * as S from './styles';

interface ITodo {
  todo: TodoType;
  priorityDict: PriorityDictType;
  fetchTodos: () => void;
}

const Todo: FC<ITodo> = ({ todo, priorityDict, fetchTodos }) => {
  const handleUpdate = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { _id, ...rest } = todo;

    await RequestsBuilder.put({
      endpoint: `/todos/${_id}`,
      body: { ...rest, completed: e.target.checked },
    });

    fetchTodos();
  };

  const handleDelete = async () => {
    await RequestsBuilder.delete({
      endpoint: `/todos/${todo._id}`,
    });

    fetchTodos();
  };

  return (
    <S.Container>
      <S.Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={handleUpdate}
      />
      <S.Main>
        <S.Title>
          <b>{todo.title}</b>
          {todo?.dateCreated?.split('T')[0]}
        </S.Title>
        <span>{todo.description}</span>
      </S.Main>
      <S.Priority>Priority: {priorityDict?.[todo.priority]}</S.Priority>
      <S.DeleteButton onClick={handleDelete}>x</S.DeleteButton>
    </S.Container>
  );
};

export default Todo;
